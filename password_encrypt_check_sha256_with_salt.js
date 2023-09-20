const encryptPassword = (password) => {
  const salt = crypto.randomBytes(64).toString("hex");
  const hashedPassword = crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");

  return {
    salt: salt,
    encryptedPassword: hashedPassword,
  };
};

const checkPassword = (plainTextPassword, encryptedPassword, salt) => {
  const hashedEnteredPassword = crypto
    .createHash("sha512")
    .update(plainTextPassword + salt)
    .digest("hex");

  return hashedEnteredPassword === encryptedPassword;
};

module.exports = { encryptPassword, checkPassword };
