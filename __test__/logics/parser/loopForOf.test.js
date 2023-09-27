const loopForOf = require('../../../lib/logics/parser/loopForOf');
const getJsFormat = require('../test-parser-helper');

describe('Test var assign', () => {
	it('Should return null if not match', () => {
		const test1 = loopForOf('diulang semu foo tina bar');
		const test2 = loopForOf('diulang smua foo dar bar');
		expect(test1).toBe(null);
		expect(test2).toBe(null);
	});

	it('Should return correctly flexing', () => {
		const jsFormat = getJsFormat(`
      diulang kabeh foo tina bar
        nyetak foo
      cekap
    `);
		expect(jsFormat).not.toBeNull();
		let shouldMatch = ['for (const foo of bar) {', 'console.log(foo)', '}'];
		jsFormat.split('\n').every((v, i) => {
			if (!shouldMatch[i]) return true;
			return expect(v).toContain(shouldMatch[i]);
		});
	});
});
