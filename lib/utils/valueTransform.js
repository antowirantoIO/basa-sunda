const booleanValue = (msg) => {
  if (msg.match(/leres$/) || msg.match(/wajar$/)) {
    return "true";
  } else if (msg.match(/lepat$/)) {
    return "false";
  }

  return null;
};

const valueTransform = (msg) => {
  let transforms = [booleanValue];

  for (const transform of transforms) {
    let res = transform(msg);
    if (res) {
      return res;
    }
  }

  // if not transformed
  return msg;
};

module.exports = valueTransform;
