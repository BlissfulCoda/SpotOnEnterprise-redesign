type ValidatorEmailProps = {
  email: string;
  setEmailError(msg: string): void;
};

type ValidateNameProps = {
  userName: string;
  setNameError(msg: string): void;
};

type ValidateMessageProps = {
  message: string;
  setMessageError(msg: string): void;
};

type ValidateButtonProps = {
  userName: string;
  email: string;
  message: string;
  setBtnDisabled(val: boolean): void;
};

// VALIDATE NAME
const validateUserName = ({ userName, setNameError }: ValidateNameProps) => {
  return userName.trim() && userName.trim().length < 5
    ? setNameError("Name is too short")
    : userName && userName.length >= 40
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

const validateButton = ({
  userName,
  email,
  message,
  setBtnDisabled,
}: ValidateButtonProps) => {
  return userName.trim().length >= 5 &&
    userName.trim().length <= 40 &&
    email.trim().includes("@") &&
    message.trim().length >= 10 &&
    message.trim().length <= 200
    ? setBtnDisabled(false)
    : setBtnDisabled(true);
};

export { validateUserName, validateEmail, validateMessage, validateButton };
