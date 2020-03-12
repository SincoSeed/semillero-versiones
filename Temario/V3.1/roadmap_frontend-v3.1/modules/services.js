myApp.define('services', ['dataBase/dataBase.main'], (dataBase) => {
    return {
        registerMenu: (menu, fnNext) => dataBase.insert('INSERT INTO menus (name, type, idfather) VALUES (?,?,?)', [
            menu.name,
            menu.type,
            menu.idfather
        ], fnNext),
        registerUser: (user, fnNext) => dataBase.insert('INSERT INTO users(name, lastName, email, password) VALUES (?,?,?,?)', [
            user.name,
            user.lastName,
            user.email,
            user.password
        ], fnNext),
        registerTheme: (theme, fnNext) => dataBase.insert('INSERT INTO themes(name , idmenu, principal, examples, conclusions, list) VALUES (?,?,?,?,?,?)', [
            theme.name,
            theme.idmenu,
            theme.principal?JSON.stringify(theme.principal):null,
            theme.examples?JSON.stringify(theme.examples):null,
            theme.conclusions?JSON.stringify(theme.conclusions):null,
            theme.list?JSON.stringify(theme.list):null
        ], fnNext),
        getMenus: (type, fnNext) => dataBase.select('SELECT * FROM menus WHERE type=?', [type], row => ({
            id: row["id"],
            name: row["name"],
            type: row["type"],
            idfather: row["idfather"]
        }), fnNext),
        getThemes: fnNext => {
            const tema = localStorage.getItem('tema');
            dataBase.select('SELECT * FROM themes', [tema], row => ({
                name: row['name'],
                idmenu: row['idmenu'],
                principal: JSON.parse(row['principal']),
                examples: JSON.parse(row['examples']),
                conclusions: JSON.parse(row['conclusions']),
                list: JSON.parse(row['list'])
            }), fnNext);
        },
        getTheme: (idmenu, fnNext) => {
            dataBase.select('SELECT * FROM themes WHERE idmenu = ?', [idmenu], row => ({
                name: row['name'],
                idmenu: row['idmenu'],
                principal: JSON.parse(row['principal']||"[]"),
                examples: JSON.parse(row['examples']||"[]"),
                conclusions: JSON.parse(row['conclusions']||"[]"),
                list: JSON.parse(row['list']||"[]")
            }), fnNext);
        }
    }
});
