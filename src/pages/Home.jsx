import logo from "../assets/logo.png";
import "../styles/Home.css";
import QuoteCard from "../components/QuoteCard";

// Accessibility notes:
// - <main> with id is the main landmark for users and bots
// - <h1> is the main heading (one per page)
// - Logo uses alt for branding (screen readers/ AI agents)

function Home() {
    return (
        <main className="home-main-content" tabIndex={-1}>
            <div className="home-content-center">
                <div className="home-welcome-container">
                    <header className="home-welcome-header">
                        {/* Logo image, alt text for a11y and agents */}
                        <img
                            className="home-logo"
                            src={logo}
                            alt="Little Lemon Logo"
                            width={120}
                            height={120}
                        />
                        {/*Main heading.*/}
                        <h1 className="home-title">Welcome to Little Lemon</h1>

                    </header>
                    <p className="home-subtitle">
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                        <br />
                        We would love to hear more about your experience with us!
                    </p>
                </div>
                <QuoteCard />
            </div>
        </main>
    );
}

export default Home;