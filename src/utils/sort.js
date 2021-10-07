import _ from 'lodash';

const sortByPriceLH = (dataCopy) => dataCopy.sort((a, b) => a.price.raw - b.price.raw);
const sortByPriceHL = (dataCopy) => dataCopy.sort((a, b) => b.price.raw - a.price.raw);
const sortByNameAZ = (dataCopy) => dataCopy.sort((a, b) => (a.name).localeCompare(b.name));
const sortByNameZA = (dataCopy) => dataCopy.sort((a, b) => (b.name).localeCompare(a.name));
const sortByDateON = (dataCopy) => dataCopy.sort((a, b) => a.created - b.created);
const sortByDateNO = (dataCopy) => dataCopy.sort((a, b) => b.created - a.created);

const mappings = {
  LH: (data) => sortByPriceLH(data),
  HL: (data) => sortByPriceHL(data),
  AZ: (data) => sortByNameAZ(data),
  ZA: (data) => sortByNameZA(data),
  ON: (data) => sortByDateON(data),
  NO: (data) => sortByDateNO(data),
};

const sortProducts = (data, sortOption) => {
  if (!sortOption) {
    return data;
  }
  const dataCopy = _.cloneDeep(data);
  return mappings[sortOption](dataCopy);
};

export default sortProducts;
