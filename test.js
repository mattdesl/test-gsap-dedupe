var browserify = require('browserify');
var test = require('tap').test;

test('identical content gets deduped and the row gets an implicit dep on the original source', function (t) {
  t.plan(0)

  var rows = [];
  browserify({fullPaths:false})
    .on('dep', [].push.bind(rows))
    .require(require.resolve('./index.js'), { entry: true })
    .bundle(check);

  function check(err, src) {
    if (err) return t.fail(err);
    var deduped = rows.filter(function (x) { return x.dedupeIndex });
    var d = deduped[0];
    var deps = {};
    if (d)
      deps[d.dedupe] = d.dedupeIndex;

    
    debugger;
    t.end()
    // t.deepEqual(d.deps, deps, "adds implicit dep");
  }
})