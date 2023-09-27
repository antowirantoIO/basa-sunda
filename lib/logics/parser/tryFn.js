const tryFn = (msg) => {
  let format = /cobaan/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `try`,
    openGroup: true,
  };
};

module.exports = tryFn;
