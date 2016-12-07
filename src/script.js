var eStore = angular.module('eStore', []);

var cart = 0;

var addToCart = function() {
  this.cart = this.cart + 1;
};

var products = [
  'assets/sample-product-1.jpg',
  'assets/sample-product-2.jpg',
  'assets/sample-product-3.jpg',
  'assets/sample-product-4.jpg',
  'assets/sample-product-5.jpg',
  'assets/sample-product-6.jpg',
  'assets/sample-product-7.jpg',
  'assets/sample-product-8.jpg',
  'assets/sample-product-9.jpg',
  'assets/sample-product-10.jpg',
  'assets/sample-product-11.jpg',
  'assets/sample-product-12.jpg',
];

var brands = [
  'assets/brand-1.png',
  'assets/brand-2.png',
  'assets/brand-3.png',
  'assets/brand-4.png',
  'assets/brand-5.png',
  'assets/brand-6.png',
  'assets/brand-7.png',
  'assets/brand-8.png',
  'assets/brand-9.png',
  'assets/brand-10.png',
  'assets/brand-11.png',
  'assets/brand-12.png',
];

eStore.controller('homeController', function() {
  this.cart = cart;
  this.addToCart = addToCart;
  this.products = products;
  this.brands = brands;
});

eStore.controller('listController', function() {
  this.cart = cart;
  this.addToCart = addToCart;
  this.products = products;
  this.brands = brands;
  this.menu = [
    'Sunglasses',
    'Shirts and Tops',
    'Designer Tops',
    'Blouses',
    'Socks and Tights',
  ];
});

eStore.controller('itemController', function() {
  this.cart = cart;
  this.addToCart = addToCart;
  this.products = products;
  this.brands = brands;
});
