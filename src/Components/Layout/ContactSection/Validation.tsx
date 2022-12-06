type ValidatorEmailProps = {
  email: string;
  setEmailError: (msg: string) => void;
};

type ValidateNameProps = {
  userName: string;
  setNameError: (msg: string) => void;
};

type ValidateMessageProps = {
  message: string;
  setMessageError: (msg: string) => void;
};

// VALIDATE NAME
const validateUserName = ({ userName, setNameError }: ValidateNameProps) => {
  return userName.trim() && userName.trim().length < 5
    ? setNameError("Name is too short")
    : userName && userName.length > 40
    ? setNameError("Name is too long.")
    : setNameError("");
};

// VALIDATE EMAIL
const validateEmail = ({ email, setEmailError }: ValidatorEmailProps) => {
  const emailRegular =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.trim() && !email.trim().match(emailRegular)
    ? setEmailError("Email is not valid")
    : setEmailError("");
};

//VALIDATE MESSAGE
const validateMessage = ({
  message,
  setMessageError,
}: ValidateMessageProps) => {
  return message.trim() && message.trim().length < 10
    ? setMessageError("Message is too short")
    : message && message.length > 200
    ? setMessageError("Try to make short and meanfull")
    : setMessageError("");
};

export { validateUserName, validateEmail, validateMessage };
