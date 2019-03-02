const app = require('./app')
const { syncAndSeed } = require('./db')

const port = process.env.PORT || 3000

syncAndSeed()
  .then(app.listen(port, () => { console.log(`listening on port ${port}...`) }))
  .catch(e => console.error(e))
