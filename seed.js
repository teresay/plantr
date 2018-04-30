const db = require('./models');

// db.sync({force: true}).then(db.close).catch(db.close);

// const db = require('./models')

db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    db.close() // only if using a version of node without `finally`
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    db.close() // only if using a version of node without `finally`
  })

