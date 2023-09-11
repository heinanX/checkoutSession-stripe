import React from 'react';

const EmailInput = ({ setEmail }: { setEmail: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <input
            type="text"
            placeholder="Email"
            name="mail"
            onChange={(e) => { setEmail(e.target.value) }}
            required
        />
    )
}

export default EmailInput;
