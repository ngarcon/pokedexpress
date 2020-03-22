const Sequelize = require('sequelize'); 

const client = new Sequelize(process.env.PG_URL, {
    define: {
        logging: false,
        timestamps: false,
    }
}); 

module.exports = client ;