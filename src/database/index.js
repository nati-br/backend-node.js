const Sequelize = require('sequelize');
const databaseConfig = require('../configs/db');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.sequelize = new Sequelize(databaseConfig);
    }
}

module.exports = new Database();