const apiUrl = "http://localhost:3000/api/products";

async function fetchProducts()
  {
    return fetch(apiUrl)
    .then(data => data.json())
    .catch(err => console.log(err))
  }

///////////////////////////////////////////

async function displayData() {
  let listData = await fetchProducts();
  console.log(listData);

  for (Product of listData) {

    displayArticle(Product);

  }

}


displayData();





function displayArticle(Product) {

  // console.log(Product);
  let href = document.createElement('a');

  let article = document.createElement('article');

  let img = document.createElement('img');

  img.setAttribute('src', '');

  img.setAttribute('alt', '');

  let h3 = document.createElement('h3');
  h3.textContent = Product.name

  let p = document.createElement('p');

  let section = document.getElementById('items');

  // lié les éléments entre eux
  article.append(img, h3, p)

  href.append(article);


  section.appendChild(href);


}

// recupérer chaine de requete dans l'Url

const queryString_url_id = window.location.search;
console.log(queryString_url_id);

//méthode 1 pour extaire id
const leId = queryString_url_id.slice(1) // permet de supprimesr le poiint d'interrogation de l'id.
// méthode 2
const URlSearchParams = new urlSearchParams(queryString_url_id);


