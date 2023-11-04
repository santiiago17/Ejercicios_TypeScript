interface Database {
    connect(): void;
    find(query: string): void;
    update(query: string, data: any): void;
    // Puedes agregar más métodos según sea necesario
}

class MySQLDatabase implements Database {
    connect() {
        console.log('Conexión a MySQL establecida');
    }

    find(query: string) {
        console.log(`Buscando en MySQL: ${query}`);
    }

    update(query: string, data: any) {
        console.log(`Actualizando en MySQL: ${query}, Data: ${JSON.stringify(data)}`);
    }
}

class SQLiteDatabase implements Database {
    connect() {
        console.log('Conexión a SQLite establecida');
    }

    find(query: string) {
        console.log(`Buscando en SQLite: ${query}`);
    }

    update(query: string, data: any) {
        console.log(`Actualizando en SQLite: ${query}, Data: ${JSON.stringify(data)}`);
    }
}


const mySQLDB = new MySQLDatabase();
mySQLDB.connect();
mySQLDB.find('SELECT * FROM users');
mySQLDB.update('UPDATE users SET name="John Doe" WHERE id=1', { name: 'John Doe' });

const sqliteDB = new SQLiteDatabase();
sqliteDB.connect();
sqliteDB.find('SELECT * FROM users');
sqliteDB.update('UPDATE users SET name="Jane Doe" WHERE id=1', { name: 'Jane Doe' });
