export const validateSignup = ( fullname, email, password, cpassword ) => {
    let error = {fullname: "", email: "", password: "", cpassword: ""}
    if(fullname.length < 5) {
        error.fullname = "Fullname should be more than 4 characters"
    }
    if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
        error.email = "Email is invalid"
    }
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password))) {
        error.password = "Password should contain at least one uppercase, one lowercase, a numeric digit and should be more than 6 characters"
    }
    if(password !== cpassword) {
        error.cpassword = "Passwords do not match"
    }
    return error;
}