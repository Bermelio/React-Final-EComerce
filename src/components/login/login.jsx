import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Asegúrate de que la ruta es correcta
import { useNavigate } from "react-router-dom"; // Para redirigir al usuario
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
            console.log(user)
        } catch (err) {
            setError("Error al iniciar sesión. Verifica tus credenciales.");
        }
    };

    return (
        <section className="loginContainer">
            <h1 className="title">Login 🔑</h1>
            <div className="conteinerDet">
                <input
                    type="email"
                    className="input"
                    placeholder="Write your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
                    placeholder="Write a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="text">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
            <div>
                <button className="btn" onClick={handleLogin}>Login</button>
            </div>
        </section>
    );
}
