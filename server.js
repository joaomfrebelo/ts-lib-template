const {WhoAmI,} = require( "./dist/lib/commonjs/WhoAmI");

console.log(
    (new WhoAmI()).get() + "🚲"
)