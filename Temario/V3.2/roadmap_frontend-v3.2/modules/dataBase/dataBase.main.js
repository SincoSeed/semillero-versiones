
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

    

    const createDbConnection = () => openDatabase('semillero_db2', '1.0', 'RoadMap Temes list', 50 * 1024 * 1024);

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


    return {
        select,
        insert,
    };
});

