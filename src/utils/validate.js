// export const checkValidateData=(email, password) =>{

// const isEmailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
// const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
 
// if(!isEmailvalid) return "Email ID is not valid";
// if(!isPasswordValid) return "Password mot valid";

// return null
// }

// export const checkValidateData = (email, password,name) => {

//   const isEmailvalid =
//     /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

//   const isPasswordValid =
//     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

//    const isNameValid = /^[A-Za-z ]{2,}$/.test(name);

//   let errorMessage = "";

//   if (!isEmailvalid) {
//     errorMessage = "Email ID is not valid";
//   }

//   if (!isPasswordValid) {
//     errorMessage += " Password is not valid";
//   }
//  if (!isNameValid) {
//     errorMessage += " Name is not valid";
//   }
//   return errorMessage || null;
// };

export const checkValidateData = (email, password, name = "") => {

  const isEmailvalid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

  let errorMessage = "";

  if (!isEmailvalid) {
    errorMessage = "Email ID is not valid";
  }

  if (!isPasswordValid) {
    errorMessage += " Password is not valid";
  }

  // Validate name only during Sign Up
  if (name !== "") {
    const isNameValid = /^[A-Za-z ]{2,}$/.test(name);

    if (!isNameValid) {
      errorMessage += " Name is not valid";
    }
  }

  return errorMessage || null;
};