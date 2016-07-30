
module.exports.defaultCheckFunc = function (content) {
  return content.length > 0;
};

module.exports.checkNickNameValid = function (nickname) {
  return nickname.length > 0;
};

module.exports.checkMobileValid = function (mobile) {
  return mobile.length > 0;
};