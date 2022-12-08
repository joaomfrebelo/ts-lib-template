const { WhoAmI,  } = require("../src/WhoAmI");

test("test", ()=>{
  expect((new WhoAmI()).get()).toBe("Monkey");
})