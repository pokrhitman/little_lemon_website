import { useState } from "react";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please enter both email and passowrd.");
            return;
        }

        setSubmitted(true);
        setEmail("");
        setPassword("");
        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <main className="login-main">
            <section className="login-container">
                <h2 className="login-header">Welcome to Little Lemon</h2>
                <p className="login-subheader">Login to continue</p>

                {submitted ? (
                    <div className="login-success-message">
                        You are logged in!
                    </div>
                ) : (
                    <form className="login-form" onSubmit={handleLogin}>
                        <label className="login-label">
                            Email 
                            <input
                            className="login-input"
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            autoComplete="username"
                            />
                        </label>

                        <label className="login-label">
                            Password
                            <input
                            className="login-input"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                            />
                        </label>

                        <button className="login-button" type="submit">
                            Login
                        </button>
                    </form>
                )}
            </section>
        </main>
    );
}

export default Login;



