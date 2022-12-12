import {WhoAmI} from "../src/WhoAmI";
import {WhoAmIError} from "../src/WhoAmIError";

QUnit.module('Who am i?', function () {

    QUnit.test('Get answer to: who am i?', function (assert) {
        assert.equal((new WhoAmI()).get(), "Monkey");
    });

    QUnit.test('Test who am i Error', function (assert) {
        assert.throws(() => {
            throw new WhoAmIError("Error")
        }, WhoAmIError);
    });

});