let cartCount = 0;
let totalPrice = 0;
const cartItems = [];

document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        
        cartItems.push({ name: productName, price: productPrice });
        cartCount++;
        totalPrice += productPrice;

        document.getElementById('cartCount').innerText = cartCount;
    });
});

document.getElementById('cartButton').addEventListener('click', () => {
    updateCartDetails();
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
});

function updateCartDetails() {
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
    
    totalPriceElement.innerText = totalPrice.toFixed(2);
}
