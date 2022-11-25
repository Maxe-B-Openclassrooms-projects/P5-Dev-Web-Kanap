  const getProductId = () =>  {
  const url = new URL(document.location).searchParams;

  return url.get(`id`);
}
const id = getProductId();
api.fetchProduct(id).then(product => {

    document.querySelector('#price').innerHTML = product.price;
    document.querySelector('#description').innerHTML = product.description;

    const options = product.colors.map(color => `<option value="${color}">${color}</option>`).join();
    document.querySelector('#colors').innerHTML =`<option value="">--SVP, choisissez une couleur --</option>${options}`;

});

const getMyCart = () => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (Array.isArray(cart)) {
      return cart
    }
  } catch (err) {
  }

  return [];
}

const itemSearcher = order => item => item.id === order.id && item.color === order.color;

const upSertItem = (cart, order) => {
  const idx = cart.findIndex(itemSearcher(order), cart);

  // Create
  if (idx < 0) {
    cart.push(order);

    return cart;
  }

  // Update
  cart[idx].quantity = order.quantity;

  return cart;
}


const formToValue = () => {
  const color = document.querySelector('#colors').value;
  const quantity = document.querySelector('#quantity').value;
  const order = { id, color, quantity };
  const cart = getMyCart();

  localStorage.setItem('cart', JSON.stringify(
    upSertItem(cart, order)
  ));
}

// https://www.youtube.com/watch?v=vMT4NNFYno0



// function diplayProduct() {
//   let cloneProduct = document.querySelector('#item').content.cloneNode(true);
//   let newProduct = cloneProduct.querySelector('#item');


//   console.log(newProduct);



// };


// function hydrateProduct (el, data) {
//   /** @type {HTMLElement} */
//   const target = el.cloneNode(true)

//   const imgParent = target.querySelector('.item__img')
//   const img = document.createElement('img')

//   const title = target.querySelector('#title')
//   const price = target.querySelector('#price')
//   const description = target.querySelector('#description')

//   const colorsSelect = target.querySelector('#colors')

//   // image
//   img.alt = data.altTxt
//   img.src = data.imageUrl;
//   imgParent.appendChild(img)

//   // title
//   title.innerText = data.name
//   // price
//   price.innerText = data.price
//   // price
//   description.innerText = data.description

//   // colors
//   data.colors
//     .map(color => createOptionElement(color))
//     .forEach(element => colorsSelect.appendChild(element))

//   // replace content with product infos
//   el.parentElement.replaceChild(target, el)

//   return target
// }




// /**
//  * Validate user input to add to cart.
//  *
//  * @param {HTMLElement} el Template element
//  * @param {Product} data
//  */
// function validateCartInput (el, data) {
//   const errors = []

//   /** @type {HTMLSelectElement} */
//   const colorsSelect = el.querySelector('#colors')
//   /** @type {HTMLInputElement} */
//   const quantityInput = el.querySelector('#quantity')
//   const minQuantity = quantityInput.min || 1
//   const maxQuantity = quantityInput.max || 1

//   const color = colorsSelect.value || null
//   const quantity = quantityInput.valueAsNumber || 0

//   // validate color
//   if (!color) {
//     errors.push(new ValidationEntryError('Veuillez choisir une couleur'))
//   } else if (!data.colors.includes(color)) {
//     errors.push(new ValidationEntryError('Couleur inconnue'))
//   }

//   // validate quantity
//   if (!Number.isInteger(quantity)) {
//     errors.push(new ValidationEntryError('Quantité invalide'))
//   } else if (quantity < minQuantity || quantity > maxQuantity) {
//     errors.push(new ValidationEntryError(`Veuillez choisir une quantité comprise entre ${minQuantity} et ${maxQuantity}`))
//   }

//   if (errors.length === 0) {
//     return { color, quantity }
//   }

//   const err = new ValidationError(errors)

//   throw err
// }





