// const db = require('postgres://localhost:5432/plantr');
// const express = require('express');
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});

const Gardener = db.define('gardeners', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define('plots', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define('vegetables', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Gardener, {through: 'vegetable_plot'});
Gardener.belongsToMany(Vegetable, {through: 'vegetable_plot'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});

module.exports = {
    Gardener, Plot, Vegetable, db
}
