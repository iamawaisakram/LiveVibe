export const PHONE_NUMBER_REGEX = {
  regex: /^[+]\d{1}[0-9]{3}[0-9]{3}[0-9]{4}$/,

  regexMessage: 'Invalid Phone Number (+123456789101)'
};

export const EMAIL_REGEX = {
  regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  regexMessage: 'Invalid email address!'
};
