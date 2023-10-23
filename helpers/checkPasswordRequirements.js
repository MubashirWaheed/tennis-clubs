export const passwordValidationChecks = [
  { name: "uppercase", text: "Uppercase" },
  { name: "lowercase", text: "Lowercase" },
  { name: "length", text: "8 Char" },
  { name: "number", text: "1 Number" },
];
export function checkPasswordRequirements(password) {
  const errors = [];

  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    errors.push("length");
  }

  // Check if the password contains at least 1 uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push("uppercase");
  }

  // Check if the password contains at least 1 lowercase letter
  if (!/[a-z]/.test(password)) {
    errors.push("lowercase");
  }

  // Check if the password contains at least 1 number
  if (!/\d/.test(password)) {
    errors.push("number");
  }

  return errors;
}
