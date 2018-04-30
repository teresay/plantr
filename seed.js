const db = require('./models');


// db.sync({force: true}).then(db.close).catch(db.close);

// const db = require('./models')
let sar = [];
sar.push(new db.Vegetable({
  name:
  color:
  planted_on:
}))
db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    new db.
    // db.close(); // only if using a version of node without `finally`
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => {
    db.close();
  })



