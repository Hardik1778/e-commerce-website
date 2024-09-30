// Select all product items and product details container
var productItems = document.querySelectorAll('.product-item');
var productDetailsContainer = document.querySelector('.product-details');

// Select elements inside the product details container
var productNameElement = document.querySelector('#product-name');
  var productImageElement = document.querySelector('#product-image');
  var productDescriptionElement = document.querySelector('#product-description');
var addToCartButton = document.querySelector('#add-to-cart-button');

// Initialize variable to keep track of the currently active product item
var activeItem = null;

// Add click event listeners to all product items
productItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Check if clicked item is already active
        if (activeItem === item) {
            // Clicked same product item again, hide product details container
            productDetailsContainer.style.display = 'none';
            item.classList.remove('active');
            activeItem = null;
        } else {
            // Clicked a different product item, show product details container with new details
            // Remove 'active' class from previous active item
            if (activeItem !== null) {
                activeItem.classList.remove('active');
            }
            // Add 'active' class to clicked item
            item.classList.add('active');
            activeItem = item;
            // Get product details from clicked item
            var productName = item.querySelector('h3').innerText;
            var productImageSrc = item.querySelector('img').src;
            var productDescription = item.querySelector('p').innerText;
            // Update product details container with new details
            productNameElement.innerText = productName;
            productImageElement.src = productImageSrc;
            productDescriptionElement.innerText = productDescription;
            // Show product details` container
            productDetailsContainer.style.display = 'block';
        }
    });
});

// Add click event listener to 'Add to Cart' button
addToCartButton.addEventListener('click', function() {
    // Replace with your own logic for adding product to cart
    alert('Product added to cart!');
});

function togglePanel() {
    var panelContent = document.querySelector('.panel-content');
    if (panelContent.style.display === 'none') {
      panelContent.style.display = 'block';
    } else {
      panelContent.style.display = 'none';
    }
  }
  function togglePanel2() {
    var panelContent = document.querySelector('.panel-content2');
    if (panelContent.style.display === 'none') {
      panelContent.style.display = 'block';
    } else {
      panelContent.style.display = 'none';
    }
  }
  function togglePanel3() {
    var panelContent = document.querySelector('.panel-content3');
    if (panelContent.style.display === 'none') {
      panelContent.style.display = 'block';
    } else {
      panelContent.style.display = 'none';
    }
  }