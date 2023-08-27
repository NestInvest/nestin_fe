const getProperties = require('./data/properties-landing-assets.json');
function getById(id){
  return require(`./data/property-details/${id}.json`)
}

module.exports = {
  getById: getById,
  getProperties: getProperties
};
