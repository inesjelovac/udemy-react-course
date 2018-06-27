export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    }
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLen) {
        isValid = value.length >= rules.minLen && isValid;
    }

    if (rules.maxLen) {
        isValid = value.length <= rules.maxLen && isValid;
    }

    return isValid;
};