const finallyFn = (msg) => {
  let format = /tungtungna/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `finally`,
    closeGroup: true,
    openGroup: true,
  };
};

module.exports = finallyFn;
