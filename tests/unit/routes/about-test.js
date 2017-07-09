import { moduleFor, test } from 'ember-qunit';

moduleFor('route:about', 'Unit | Route | about', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:i18n']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
