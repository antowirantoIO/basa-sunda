const { execCmd } = require("../../lib/utils/execCmd")
const flexing = require("../../lib/utils/flexing")
const e2eTest = require("./e2e-test")

describe('End To End Test example 1', () => {
  it('Should return as expected value', done => {
    e2eTest({
      target: "example/example1.sunda",
      contain: "Umur lu 21\nElu tua\nlamun gua umurnya 31\ngua lebih tua\ncekap ah\n"
    }, done)
  })
})