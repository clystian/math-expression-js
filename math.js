exports.evaluateExpression = function evaluateExpression(strExp) {
  if (/[\/\*\+]{2,}/.test(strExp)) return "syntax error";
  let result = `${strExp}`
  let reg = /(?<a>\d+(?:\.\d+)?)(?<op>[\*\/])(?<b>\-?\d+(?:\.\d+)?)/;
  let regPlus = /(?<a>\-?\d+(?:\.\d+)?)(?<op>[\+\-])(?<b>\-?\d+(?:\.\d+)?)/;
  let match;
  let i = 0;
  do {
    match = reg.exec(result);
    if (match) {
      result = result.replace(match[0], evaluateOperation(match[0])).replace(/\-{2}/, '+');;
    }
  } while (/[\*\/]/.test(result));

  do {
    match = regPlus.exec(result);
    if (match) {
      result = result.replace(match[0], evaluateOperation(match[0])).replace(/\-{2}/, '+');;
    }
  } while (/(\d+(\.\d+)?)[\+\-]/.test(result));

  return +result;
};

function evaluateOperation(str) {
  debugger;
  const operatorExp = /[\*\/\-\+]/i;
  const match = /(?<a>\-?\d+(?:\.\d+)?)(?<op>.)(?<b>\-?\d+(?:\.\d+)?)/.exec(
    str
  );
  const {
    groups: { a, op, b },
  } = match;
  if (operatorExp.test(str)) {
    if (op === "/") {
      return (+a / +b).toString();
    } else if (op === "*") {
      return (+a * +b).toString();
    } else if (op === "-") {
      return (+a - +b).toString();
    } else if (op === "+") {
      return (+a + +b).toString();
    }
  }
  return str;
}
