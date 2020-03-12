/**
 *  define(): determina una función que está  disponible como una variable libre
 *  o global, se usa para definir un módulo
*/

/**
 * '(dataBase/main)'
     * IDENTIFICADOR
     * - Es una cadena de terminos delimitada por barras diagonales
     * - Debe ser un identificador de camelCase
     * - Los identificadores de módulo pueden NO tener extensiones .js
     * - Pueden ser relativos o de nivel superior, es relativo si empieza por '.' o '..'
     * - Los identificadores de nivel superior se resuelven fuera de la raíz del espacio conceptual del nombre del módulo.
     */

/**
 * []
* DEPENDENCIES
* - Es una matriz literal de los IDs del módulo
* - las dependencias deben resolverse antes de que la función fabrica  
* - y los valores resueltos deben pasarse como argumentos a la función fabrica 
*   de módulo con posiciones de argumentos correspondientes a los indices de la matriz
* - Es opcional
*/

/**
 * ()=>{}
  * FACTORY
  *  Es una función que debe ejecutarse para instanciar un módulo o un objeto.
  * - Si la fabrica es una función solo debe ejecutarse una vez
  * - Si es un objeto ese obj debe asignarse como el valor exportado del módulo.
  *   nota: Si la función de fábrica devuelve un valor (un objeto, función o cualquier 
  *         valor que coaccione a verdadero), entonces ese valor debe asignarse como el 
  *         valor exportado para el módulo. 
  */
//  const myApp = s5.initialize();
myApp.define('dataBase/dataBase.main', [], () => {
    const sqls = [
        //CREATE TABLES
        'CREATE TABLE IF NOT EXISTS users(id integer primary key autoincrement, name text, lastName text, email text unique, password text)',
        'CREATE TABLE IF NOT EXISTS themes(id integer primary key autoincrement, name text unique, idmenu integer, principal text, examples text, conclusions text, list text,foreign key(idmenu) references menus (id))',
        'CREATE TABLE IF NOT EXISTS menus(id integer primary key autoincrement, name text unique, type integer, idfather integer,foreign key(idfather) references menus(id))',
        //INSERT users
        `INSERT INTO users(name, lastName, email, password) SELECT "Semillero", "GTH", "semillero@sinco.com.co", "admin123" WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = "semillero@sinco.com.co")`,
        //INSERT themes
        //`INSERT INTO themes(name , father, principal, examples, conclusions, list) SELECT "Introducción a CSS", "CSS", '["CSS (Cascading Style Sheets) son hojas de estilo en cascada."]', '["examples", "example 1"]', '["conclusions", "coclusion 1"]', '["list", "list 1"]' WHERE NOT EXISTS (SELECT 1 FROM themes WHERE id = 1)`
    ];

    /**
        * API DE WEB SQL: EL funciónamiento de la api es asincrono por lo que hay 
        * que tener cuidado con el orden que se ejecutan las sentencias SQL
        * Métodos :
        * 1. openDatabase(): crear o abrir una bd en el navegador del cliente
        *  Parámetros :
        *  1.1 nombre de la base de datos
        *  1.2. número de versión
        *  1.3. Descripción
        *  1.4. Tamaño 
        * 
        * 2. transaction() : Iniciar una transacción
        *  Parámetros :
        *  2.1 sqlStatement : sentencia sql
        *  2.2 arguments : los valores para los campos que serán utilizados en el query
        *  2.3 callback : es la función que recibe la data de la transacción y la manipula
        *  2.4 errorCallback : 
        * 
        * 3. executeSql(): Ejecutar una sentencia SQL
    * Parámetros
   	
        */

    const createDbConnection = () => openDatabase('semillero_db', '1.0', 'RoadMap Temes list', 50 * 1024 * 1024);

    const initDatabase = () => {
        const db = createDbConnection();
        db.transaction(tx => {
            const ex = sql => tx.executeSql(sql, [], (tx, result) => {
                // console.log(`Migration result : ${result}\nQuery executed : ${sql}`);
                let query = sqls.shift();
                if (query) ex(query)

            });
            ex(sqls.shift());
        });
    };
    initDatabase();
    // const query =(sql,map,next) =>{
    //     const db = createDbConnection();
    //     db.transaction(tx => tx.executeSql(sql,[],))
    // }

    /*   const initThemes = () => {
           const db = createDbConnection();
           let sqlTemesTable =
               // 'CREATE TABLE IF NOT EXISTS themes(id integer primary key autoincrement, name text, father text, principal text, examples text, conclusions text, list text';, FOREIGN KEY (idCreator) REFERENCES users(id)
             'CREATE TABLE IF NOT EXISTS themes(id integer primary key autoincrement, name text, father text, principal text, examples text, conclusions text, list text)';
           // let sqlTemesInsert = 'INSERT INTO themes(teme , description , idPatern, idCreator ) SELECT "HTML (Hyper Text Markup Languaje)", "Es un lenguaje que nos permite definir la estructura de una página web.", "0", 1 WHERE NOT EXISTS (SELECT 1 FROM temes WHERE id = 1)';
           let sqlTemesInsert =
               `INSERT INTO themes(name , father, principal, examples, conclusions, list) SELECT "Introducción a CSS", "CSS", "['CSS (Cascading Style Sheets) son hojas de estilo en cascada.']", "examples", "conclusions", "list" WHERE NOT EXISTS (SELECT 1 FROM themes WHERE id = 1)`;
           // 'INSERT INTO temes(teme , description , idPatern, idCreator ) SELECT "HTML (Hyper Text Markup Languaje)", "Es un lenguaje que nos permite definir la estructura de una página web.", "0", 1 WHERE NOT EXISTS (SELECT 1 FROM temes WHERE id = 1)'
   
           db.transaction(tx => {
               tx.executeSql(sqlTemesTable);
               tx.executeSql(sqlTemesInsert);
           });
       };*/
    // initThemes();
    
    const select = (sql, tema, map, next) => {
        const db = createDbConnection();
        db.transaction(tx => tx.executeSql(sql, tema, (tx, result) => {
            const values = [].map.call(result.rows, map);
            next(values);
        }),(error) => {
            console.log(error.message)
        });
    };

    const insert = (sql, data, next) => {
        const db = createDbConnection();
        db.transaction(tx => tx.executeSql(sql, data, (tx, results) => {
            next(results);
        }),(error) => {
            console.log(error.message)
        });
    };

    //const selectFirst = (sql, map, next) => select(sql, map, values => next(values.shift()));

    return {
        select,
        insert,
        //selectFirst
    };
});
/**
 * LINKS :
 * https://programacion.net/articulo/introduccion_a_web_sql_1305
 * https://www.arkaitzgarro.com/html5/capitulo-8.html
 * https://www.w3.org/TR/webdatabase/#sql
 */
