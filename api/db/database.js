import sqlite3 from "sqlite3"

const db = new sqlite3.Database("db/database.db", (err) => {
    if (err) return console.log(err);
    console.log("Connection established.");
});

db.close((err) => {
    if (err) return console.log(err);
    console.log("Connection closed.");
});

export default db;