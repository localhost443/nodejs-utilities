const crypto = require("crypto");

const encryptPassword = (password) => {
  //Creating a random salt of 64 byte to use with each account
  //Each account will have its own salt
  const salt = crypto.randomBytes(64).toString("hex");
  const hashedPassword = crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");
  //Returning the salt along with encrypted password, you need to save both salt and the password
  return {
    salt: salt,
    encryptedPassword: hashedPassword,
  };
};

const checkPassword = (plainTextPassword, encryptedPassword, salt) => {
  //Encrypting the password again with the salt
  const hashedEnteredPassword = crypto
    .createHash("sha512")
    .update(plainTextPassword + salt)
    .digest("hex");
  //comparing converted password with stored password, and returning
  return hashedEnteredPassword === encryptedPassword;
};
//Exporting the module
module.exports = { encryptPassword, checkPassword };
