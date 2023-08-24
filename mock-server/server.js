const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const data = require('./index')


server.get('/api/db', (req, res, next) => {
  res.status(200).send(data.getDb);
});

server.get('/api/property/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(200).send(data.getById(id));
});

server.listen(3000, ()=>{
  console.log('JSON server listening on port 3000')
})
