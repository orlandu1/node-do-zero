import sql from './db.js';

async function createTable() {
    try {

        await sql`DROP TABLE IF EXISTS videos;`.then(() => {
            console.log("Tabela Apagada!");
        });

        await sql`
                CREATE TABLE videos(
                id TEXT PRIMARY KEY,
                title TEXT,
                description TEXT,
                duration INTEGER
                )
     `.then(() => {
            console.log("Tabela Criada!");
        });

    } catch (error) {
        console.error('❌ Erro:', error);
    }
}

createTable();