var ggbgfx = require("../index");
var decHex = ggbgfx.decHex;

test("decHex 0 to equal 0x00", () => {
  expect(decHex(0)).toBe("0x00");
});

test("decHex 255 to equal 0xFF", () => {
  expect(decHex(255)).toBe("0xFF");
});

test("decHex 256 to wrap to 0x00", () => {
  expect(decHex(256)).toBe("0x00");
});
