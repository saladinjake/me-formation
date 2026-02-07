const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'folio.db');
const db = new Database(dbPath);

console.log('Database path:', dbPath);

try {
    // Create tables
    db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);
    console.log('✅ Tables created or verified.');

    // Check for admin user
    const stmt = db.prepare('SELECT count(*) as count FROM admins');
    const result = stmt.get();

    if (result.count === 0) {
        const hashedPassword = bcrypt.hashSync('password123', 10);
        const insert = db.prepare('INSERT INTO admins (username, password) VALUES (?, ?)');
        insert.run('admin', hashedPassword);
        console.log('✅ Default admin user created: admin / password123');
    } else {
        console.log('ℹ️ Admin user already exists.');
    }

} catch (error) {
    console.error('❌ Error initializing database:', error);
}

db.close();
