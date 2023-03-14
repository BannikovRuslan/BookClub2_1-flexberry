import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:file-with-default', 'Unit | Transform | file with default', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:file-with-default');
    assert.ok(transform);
  });
});
