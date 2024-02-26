const { Model, DataTypes } = require('sequelize');

const GENERAL_USER = 'User';

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: GENERAL_USER,
            modelName: 'User',
            timestamps: true
        }
    }
} 

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'firstName'
    },
    lastName:{ 
        allowNull:true,
        type: DataTypes.STRING,
        field: 'lastName'
    },
    email:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'email'
    },
    password:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'password'
    },
    access_level:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'access_level'
    },
    token:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'password'
    },
    createdAt:{ 
        allowNull:false,
        type: DataTypes.DATE,
        field: 'createdAt'
    },
    updatedAt:{
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updatedAt'
    }
}
  
module.exports = { User, UserSchema };