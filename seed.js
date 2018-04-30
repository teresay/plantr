//const db = require('./models');
const { Vegetable, Gardener, Plot, db }= require('./models');


// db.sync({force: true}).then(db.close).catch(db.close);

// const db = require('./models')
const vegetables = [{
      name: 'Carrot',
      color: 'Orange',
      planted_on: new Date()
    },
    {
      name: 'Cucumber',
      color: 'Green',
      planted_on: new Date()
    },
    {
      name: 'Broccoli',
      color: 'Green',
      planted_on: new Date()
    },
    {
      name: 'Eggplant',
      color: 'Purple',
      planted_on: new Date()
}];
const gardeners = [{
      name: 'Bill',
      age: 35
    },
    {
      name: 'Suzan',
      age: 45
    },
    {
      name: 'Teresa',
      age: 55
    },
    {
      name: 'Andrew',
      age: 65
}];
const plots = [{
      size: 6,
      shaded: true
    },
    {
      size: 6,
      shaded: false
    },
    {
      size: 6,
      shaded: 0
    },
    {
      size: 6,
      shaded: 1
}];
db.sync({force: true})
  .then( _ => Promise.all([Vegetable.bulkCreate(vegetables), Gardener.bulkCreate(gardeners), Plot.bulkCreate(plots)]))
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => {
    db.close();
  })
