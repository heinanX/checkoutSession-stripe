const PasswordInput = ({ setPass }: { setPass: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <input
            type="password"
            placeholder="Password"
            name="psw"
            onChange={(e) => { setPass(e.target.value) }}
            required
        />
    )
}

export default PasswordInput