export const validator = (d) => {
  let { name, email, message } = d;
  if (name === "") {
    return {
      success: 0,
      data: "Please provied name",
    };
  }
  if (email === "") {
    return {
      success: 0,
      data: "Please provied email",
    };
  }
  let emailValidate = validateEmail(email);
  if (!emailValidate) {
    return {
      success: 0,
      data: "Please provied valid email",
    };
  }
  if (message === "") {
    return {
      success: 0,
      data: "Please provied message",
    };
  }
  return {
    success: 1,
  };
};

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
