const getDb = require('./data/db.json');
function getById(id){
  return require(`./data/property-details/${id}.json`)
}

module.exports = {
  getDb: getDb,
  getById: getById
};
