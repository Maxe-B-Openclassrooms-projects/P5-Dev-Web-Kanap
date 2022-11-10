const getProductId = () =>  {
  const url = new URL(document.location).searchParams;

  return url.get(`id`);
}

const id = getProductId();
api.fetchProduct(id).then(product => {
  console.log(product)
  // TODO BINder product sur la page
});









