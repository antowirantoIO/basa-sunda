const continueStatement = (msg) => {
	let format = /luncat/;
	let match = msg.match(format);
	if (!match) return null;
  
	return {
	  exp: `continue;`,
	};
  };
  
  module.exports = continueStatement;
  