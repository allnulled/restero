const fs = require("fs");
const path = require("path");

const db_file = path.resolve(__dirname, "../../src/configurations/db.sql");
const db_ejs_file = path.resolve(__dirname, "../../src/configurations/db/db.ejs.sql");

const db_file_copy = path.resolve(__dirname, "preparation/db.sql");
const db_ejs_file_copy = path.resolve(__dirname, "preparation/db.ejs.sql");

fs.copyFileSync(db_file_copy, db_file);
fs.copyFileSync(db_ejs_file_copy, db_ejs_file);

fs.unlinkSync(db_file_copy);
fs.unlinkSync(db_ejs_file_copy);