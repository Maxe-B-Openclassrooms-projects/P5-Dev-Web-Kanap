async function displayData() {

  const listData = await api.fetchProducts();

  for (Product of listData) {

    displayArticle(Product);

  }

}

displayData();





function displayArticle(product) {

//console.log(product);
  

  let link = document.createElement('a');
  link.href = `./product.html?id=${product._id}`;

 
 
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

  // lié les éléments entre eux
  article.append(img, h3, p)

  link.append(article);


  section.appendChild(link);


}
