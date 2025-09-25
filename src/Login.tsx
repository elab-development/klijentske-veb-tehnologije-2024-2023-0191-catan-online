import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    if(username === "admin" && password === "1234") {
        localStorage.setItem("user", JSON.stringify({ username }));
        navigate("/");
    } else {
        alert("Pogresno korisničko ime ili lozinka")
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSumbit} className="login-form">
                <h2>Prijava</h2>
                <div>
                    <label>Korisničko ime:</label>
                    <input
                        type = "text"
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Lozinka:</label>
                    <input
                        type = "password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Uloguj se</button>
            </form>
        </div>
        
    );
};

export default Login;