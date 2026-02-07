import Database from 'better-sqlite3';
import path from 'path';
import bcrypt from 'bcryptjs';

const dbPath = path.join(process.cwd(), 'folio.db');
const db = new Database(dbPath);

// Initialize Database Schema
const initDb = () => {
    db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
  `);
    // Check if admin exists, if not create default
    const stmt = db.prepare('SELECT count(*) as count FROM admins');
    const result = stmt.get() as { count: number };

    if (result.count === 0) {
        const hashedPassword = bcrypt.hashSync('password123', 10);
        const insert = db.prepare('INSERT INTO admins (username, password) VALUES (?, ?)');
        insert.run('admin', hashedPassword);
        console.log('Default admin user created: admin / password123');
    }
};

initDb();

export default db;
