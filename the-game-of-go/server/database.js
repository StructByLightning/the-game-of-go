const sqlite3 = require("sqlite3").verbose();

class Database {
  constructor() {
    this.dbconnection = new sqlite3.Database("./server/data.db");
  }

  addClient = (clientId, clientName) => {
    return new Promise((resolve, reject) => {
      this.dbconnection.all(`
        INSERT INTO 
          clients (clientId, clientName) 
        VALUES 
          (?, ?) 
      `, [clientId, clientName], (error, rows) => {
        this.handleResult(error, rows, resolve, reject)
      });
    });
  }

  handleResult(error, rows, resolve, reject) {
    if (error) {
      console.log(error);
      reject(error);
    } else {
      resolve(rows);
    }
  }
}

const db = new Database();

module.exports = db;
