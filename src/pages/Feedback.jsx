import React from "react";
import { useState, useRef } from "react";
import "../styles/Feedback.css";
import useDevice from "../hooks/useDevice";

function RadioGroup({ selected, onChange, children }) {
    return (
        <fieldset className="radio-group" aria-labelledby="heard-from-label">
            <legend id="heard-from-label" className="radio-group-heading">
                How did you hear about us?
            </legend>
            {React.Children.map(children, child =>
                React.cloneElement(child, { selected, onChange })
            )}
        </fieldset>
    );
}

function RadioOption({ value, selected, onChange, children }) {
    return (
        <label className="radio-option">
            <input
                type="radio"
                name="heardForm"
                value={value}
                checked={selected === value}
                onChange={() => onChange(value)}
                required />
            <span>{children}</span>
        </label>
    );
}

function Feedback() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [heardFrom, setHeardFrom] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const successRef = useRef(null);
    const { isMobile } = useDevice();

    const allValid =
        firstName.trim() &&
        lastName.trim() &&
        phoneNumber.trim() &&
        message.trim() &&
        heardFrom;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!allValid) {
            alert("Please fill in all the fields and select how you heard about us.");
            return;
        }
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setMessage("");
        setHeardFrom("");
        setTimeout(() => setSubmitted(false), 3000);
        // On mobile, optionally focus the success message for screen readers
        if (isMobile && successRef.current) {
            successRef.current.focus();
        }
    };

    return (
        <main className="feedback-main" id="main-content">
            <section className="feedback-intro">
                <h1 className="feedback-heading">
                    Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
                </h1>
            </section>
            <section className="feedback-form-section">
                <form className="feedback-form" onSubmit={handleSubmit} noValidate>
                    <h2 className="feedback-subheading">How was your visit to Little Lemon?</h2>
                    {submitted && (
                        <div
                            className="feedback-success-message"
                            role="status"
                            tabIndex={-1}
                            aria-live="polite"
                        >
                            Thank you for your feedback!
                        </div>
                    )}

                    <div className="feedback-field">
                        <label className="feedback-label" htmlFor="firstName">First Name</label>
                        <input
                            className="feedback-input"
                            id="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            required
                            autoComplete="given-name"
                        />
                    </div>

                    <div className="feedback-field">
                        <label className="feedback-label" htmlFor="lastName">Last Name</label>
                        <input
                            className="feedback-input"
                            id="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            required
                            autoComplete="family-name"
                        />
                    </div>

                    <div className="feedback-field">
                        <label className="feedback-label" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            className="feedback-input"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone name"
                            type="tel"
                            required
                            autoComplete="tel"
                            inputMode="tel"
                        />
                    </div>

                    <div className="feedback-field">
                        <label className="feedback-label" htmlFor="message">Your Message</label>
                        <textarea
                            className="feedback-message-input"
                            id="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Leave your feedback here"
                            maxLength={250}
                            required
                            rows={3}
                        />
                    </div>

                    <RadioGroup selected={heardFrom} onChange={setHeardFrom}>
                        <RadioOption value="social-media">Social Media</RadioOption>
                        <RadioOption value="friends">Friends</RadioOption>
                        <RadioOption value="advertising">Advertising</RadioOption>
                        <RadioOption value="other">Other</RadioOption>
                    </RadioGroup>

                    <button className="feedback-submit-button" type="submit"
                        disabled={!allValid}
                        aria-disabled={!allValid}
                    >
                        Submit
                    </button>
                </form>
            </section>
        </main >
    );
}

export default Feedback;