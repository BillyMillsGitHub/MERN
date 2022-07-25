"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const Dice = () => {
  function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  }

  const num = getRandomNumber();
  return /*#__PURE__*/React.createElement("p", null, "Your dice roll: ", num);
};


var _default = Dice;
exports.default = _default;

