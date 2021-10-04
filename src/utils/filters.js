const filterByPrice = (data, priceRange) => {
  const { min, max } = priceRange;
  return data
    .filter(({ price }) => price.raw >= min)
    .filter(({ price }) => price.raw <= max);
};

const filterByCategory = (data, value) => {
  if (value === '') return data;
  return data.filter((product) => {
    if (product.categories.length === 0) {
      return false;
    }
    const categories = product.categories.map(({ name }) => name);
    return categories.includes(value);
  })
};

const mappings = {
  price: (data, priceRange) => filterByPrice(data, priceRange),
  category: (data, value) => filterByCategory(data, value),
};

const filterProductList = (data, filterTypes) => {
  const typeKeys = Object.keys(filterTypes);
  const iter = (newData, types) => {
    if (types.length === 0) {
      return newData;
    }
    const [current, ...rest] = types;
    const filteredData = mappings[current](newData, filterTypes[current]);
    return iter(filteredData, rest);
  }
  return iter(data, typeKeys);
};

export default filterProductList;
