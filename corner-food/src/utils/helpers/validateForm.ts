export const validateForm = (field: string, value: string) => {
    let isValid = false;

    switch (field) {
        case 'username':
        case 'address':
            isValid = value.length >= 3;

            break;
        case 'email':
            isValid = /\S+@\S+\.\S+/.test(value);

            break;
        case 'password':
        case 'password-repeat':
            isValid = value.length >= 6;

            break;
        default:
            break;
    }

    return isValid;
};
