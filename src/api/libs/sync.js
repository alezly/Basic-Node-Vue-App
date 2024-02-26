const sequelize = require('./sequelize');

sequelize.sync().then(() => {
    console.log('Sincronización completa');
}).catch(err => {
    console.error('Error durante la sincronización:', err);
});