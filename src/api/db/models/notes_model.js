const { Model, DataTypes, Sequelize } = require('sequelize');

const GENERAL_NOTES = 'Notes';

class Notes extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: GENERAL_NOTES,
            modelName: 'Notes',
            timestamps: true
        }
    }
} 

const NotesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'name'
    },
    address:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'address'
    },
    phone:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'phone'
    } 
}
  
module.exports = { Notes, NotesSchema };