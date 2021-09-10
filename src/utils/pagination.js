const paginate = (currentPage, perPage, data) => {
  const ids = data.map(({ id }) => id);
  const paginatedData = ids.slice((currentPage * perPage) - perPage, currentPage * perPage);
  return paginatedData.reduce((acc, id) => [...acc, data.find((product) => product.id === id)],[]);
};

export default paginate;