export const checkValidData = (email, password) => {
  const enteredEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const enteredPassword =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,14})\S$/.test(password);

  // const enteredName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

  if (!enteredEmail) {
    return "Please enter a valid email address or phone number";
  }

  if (!enteredPassword) {
    return "Your password must contain one capital letter,one small letter,one number and 7 to 15 characters";
  }

  // if (!enteredName && name !== null) {
  //   return "Please enter correct name";
  // }

  return null;
};
