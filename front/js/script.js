async function displayData() {

  const listData = await api.fetchProducts();

  for (Product of listData) {

    displayArticle(Product);

  }

}

displayData();





function displayArticle(product) {


  let href = document.createElement('a');

  let article = document.createElement('article');

  let img = document.createElement('img');

  img.setAttribute('src', product.imageUrl);

  img.setAttribute('alt', product.altTxt);

  let h3 = document.createElement('h3');
  h3.textContent = product.name

  let p = document.createElement('p');
  p.textContent = product.description

  let section = document.getElementById('items');
  items.getElementById = product._id

  // lié les éléments entre eux
  article.append(img, h3, p)

  href.append(article);


  section.appendChild(href);


}
