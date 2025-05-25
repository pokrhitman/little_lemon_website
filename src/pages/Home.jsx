import logo from "../assets/logo.png";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-welcome-container">
            <header className="home-welcome-header">
                <img
                    className="home-logo"
                    src={logo}
                    alt="Little Lemon Logo"
                />
                <h1 className="home-title">Welcome to Little Lemon</h1>
            </header>
            <p className="home-subtitle">
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                <br />
                We would love to hear more about your experience with us!
            </p>
        </div>
    );
}

export default Home;