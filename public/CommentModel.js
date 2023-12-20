const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Comment extends Model { }

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    blogpost_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogPost',
            key: 'id',
        },
    },
    blog_comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogComment',
    }
);
module.exports = Comment;