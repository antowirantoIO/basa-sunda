const awaitProcess = (msg) =>{
    let format = /mastikeun/
    let match = msg.match(format);
    if (!match) return null;
  
    return {
      exp: `await ${valueTransform(match[3])};`
    }
  }
module.exports = awaitProcess;