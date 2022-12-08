import {WhoAmI} from "../src/WhoAmI";

QUnit.module('Who am i?', function() {
  QUnit.test('Get answer to: who am i?', function(assert) {
    assert.equal((new WhoAmI()).get(), "Monkey");
  });
});