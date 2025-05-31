import { useState } from "react";
import "../styles/Feedback.css";

function Feedback() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !phoneNumber || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        //Handle feedback logic (could be API call)
        console.log("Feedback submitted!");
        console.log({ firstName, lastName, phoneNumber, message });

        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setMessage("");

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <main className="feedback-main">
            <section className="feedback-intro">
                <h2 className="feedback-heading">
                    Little Lemon is a charming neighborhood bistro that served simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
                </h2>
            </section>
            <section className="feedback-form-section">
                <form className="feedback-form" onSubmit={handleSubmit}>
                    <h3 className="feedback-subheading">How was your visit to Little Lemon?</h3>
                    {submitted && (
                        <div className="feedback-success-message">
                            Thank you for your feedback!
                        </div>
                    )}

                <label className="feedback-label">
                    First Name
                    <input
                    className="feedback-input"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Enter your first name"
                    required
                    />
                </label>

                <label className="feedback-label">
                    Last Name 
                    <input
                    className="feedback-input"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    required
                    />
                </label>

                <label className="feedback-label">
                    Phone Number
                    <input
                    className="feedback-input"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone name"
                    type="tel"
                    required
                    />
                </label>

                <label className="feedback-label">
                    Your Message
                    <textarea
                    className="feedback-message-input"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Leave your feedback here"
                    maxLength={250}
                    required
                    />
                </label>

                <button className="feedback-submit-button" type="submit">
                    Submit
                </button>
                </form>
            </section>
        </main>
    );
}

export default Feedback;