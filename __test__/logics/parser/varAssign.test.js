const varAssign = require('../../../lib/logics/parser/varAssign')
const getJsFormat = require('../test-parser-helper')

describe('Test var assign', () => {
  it('Should parse string correctly', () => {
    const test1 = varAssign("ieuteh foo saruajeung 'foo'")
    expect(test1.exp).toBe(`let foo = 'foo';`)
  })

  it('Should parse number correctly', () => {
    const test1 = varAssign("ieuteh foo saruajeung 123")
    expect(test1.exp).toBe(`let foo = 123;`)
  })

  it('Should return null if not match', () =>{
    const test1 = varAssign("lit foo saruajeung 123")
    const test2 = varAssign("litetrayl foo i 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
      ieuteh foo saruajeung 123
      ieuteh bar saruajeung "test"
    `)
    expect(jsFormat).not.toBeNull()
    expect(jsFormat).toContain(`let foo = 123;`)
    expect(jsFormat).toContain(`let bar = "test";`)
  })
})