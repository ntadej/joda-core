import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:account', 'Unit | Route | account', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:i18n']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
