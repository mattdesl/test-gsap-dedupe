var test = require('tape')

var gsap = require('gsap')
var gsap2 = require('dep')

test('dedupes correctly', function(t) {
  t.equal(typeof gsap, 'function', 'is function')
  t.equal(typeof gsap2, 'function', 'is also a function')
  t.end()
})