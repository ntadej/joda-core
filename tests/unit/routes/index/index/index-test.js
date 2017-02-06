import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:index/index/index', 'Unit | Route | index/index/index', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
