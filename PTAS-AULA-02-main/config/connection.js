const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://mpgsmwhw:4ciusASYw5yf-gl4gZhnxp7-lb5daNCW@babar.db.elephantsql.com/mpgsmwhw", {
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Anteção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };