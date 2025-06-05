import "../styles/Signup.css";
import { useState } from "react";
import { validateEmail } from "../utils/utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SignUp() {
  //State hooks for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  const [submitted, setSubmitted] = useState(false);

  // Returns true if the form is valid
  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      (role === "individual" || role === "business")
    );
  };

  //Resets all form fields to initial values
  const clearForm = () => {
    setFirstName ("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  // Handles form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
      setTimeout(() =>setSubmitted(false), 3000);
    }
  };

  return (

    <main className="signup-main">
      <section className="signup-container">
        <h2 className="signup-header">Sign Up</h2>
        <p className="signup-subheader">
          Create your account to join Little Lemon!
        </p>
        {submitted && (
          <div className="signup-success-message">
            Account created! Welcome!
          </div>
        )}
        <form className="signup-form" onSubmit={handleSubmit} autoComplete="off">
          <label className="signup-label">
            First Name <sup>*</sup>
            <input
            className="signup-input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            />
          </label>
          <label className="signup-label">
            Last Name <sup>*</sup>
            <input
            className="signup-input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            />
          </label>
          <label className="signup-label">
            Email address <sup>*</sup>
            <input
            className="signup-input"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            />
            </label>
            <label className="signup-label">
            Password <sup>*</sup>
            <input
            className="signup-input"
            type="password"
            placeholder="Email address"
            value={password.value}
            onChange={e => setPassword({...password, value: e.target.value})}
            onBlur={() => setPassword({ ...password, isTouched: true})}
            required
            />
            {/* Show password error only if touched and too short */}
            {password.isTouched && password.value.length < 8 && (
              <PasswordErrorMessage />
            )}
            </label>
            <label className="signup-label">
            Role (please select) <sup>*</sup>
            <select
            className="signup-select"
            value={role}
            onChange={e => setRole(e.target.value)}
            required
            >
              <option value="" disabled selected hidden>Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </label>
          <button
          className="signup-submit-button"
          type="submit"
          disabled={!getIsFormValid()}
          >
            Create Account
          </button>       
        </form>
      </section>
    </main>
  );
}

export default SignUp; 