import validations from "./Validations";

export default class SignupValidations {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    checkValidations() {

        let errors = [];
        //email validations

        if (!validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }

        //password validations
        if (!validations.minLength(this.password, 6)) {
            errors['password'] = 'Password should be of 6 characters';
        }
        return errors;
    }
    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND':
                return 'Email Not found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            default:
                return 'Unexpected error occurred. Please try again'
        }
    }
}
