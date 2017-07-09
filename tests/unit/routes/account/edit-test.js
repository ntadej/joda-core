import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:account/edit', 'Unit | Route | account/edit', {
  // Specify the other units that are required for this test.
  needs: ['service:currentUser', 'service:i18n']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
