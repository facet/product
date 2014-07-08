var assert = require('assert'),
  ProductAPI = require('..'),
  Intercom = require('facet-intercom'),
  request = require('supertest');

var appOptions = {
  intercom: new Intercom
};

var productAPI = new ProductAPI(appOptions);

describe('app', function() {
  it('should exist', function(){
    assert(productAPI);
  });
});
