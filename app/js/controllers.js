'use strict';
var storeApp = angular.module('storeApp', []);

storeApp.controller('ShopController', ['$http',  ShopController]);

function ShopController ($http) {
  var vm = this;
  vm.viewCategory = 'clothing';
  vm.products = [];
  $http.get('data/products.json').success(function(data) {
    vm.products = data; 
  });
  vm.numProducts = function() {
    return vm.products.filter(function(product) {
      return product.category == vm.viewCategory;
    }).length;
  };
}
