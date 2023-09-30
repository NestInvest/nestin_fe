const getProperties = require('./data/properties-landing-assets.json');
function getById(id){
  return require(`./data/property-details/${id}.json`)
}

function getImageById(id){
  return require(`./images/${id}.jpg`);
}

module.exports = {
  getById: getById,
  getImageById: getImageById,
  getProperties: getProperties
};
