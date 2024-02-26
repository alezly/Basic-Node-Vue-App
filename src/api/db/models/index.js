const { Notes, NotesSchema } = require('./notes_model');
const { User, UserSchema } = require('./user_model');

function setupModels(sequelize) {
    Notes.init(NotesSchema, Notes.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
