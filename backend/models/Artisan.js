const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const Artisan = sequelize.define(
    'Artisan',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        slug: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        nom: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        note: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false,
        },
        ville: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        apropos: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        site_web: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        top: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        specialite_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'artisans',
        timestamps: false,
    }
)

module.exports = Artisan