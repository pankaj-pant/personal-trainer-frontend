import React, { useState } from 'react';

export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = event => {
        setValue({...value, [event.target.name] : event.target.value});
    };
    const reset = () => {
        setValue({
            firstname: "",
            lastname: "",
            streetaddress: "",
            postcode: "",
            city: "",
            email: "",
            phone: ""
        });
    };
    return[value, handleChange, reset];
};