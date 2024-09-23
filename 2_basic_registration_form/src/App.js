// tutorial: https://www.youtube.com/watch?v=8hU0I8rY4u4

import { useState } from "react";
import "./styles/App.css";
import "./styles/reset.css";

function App() {
    return (
        <div className="App">
            <Form />
        </div>
    );
}

function Form() {
    const [submitted, setSubmitted] = useState(false);

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleFirstNameInputChange = (event) => {
        setFormValues({ ...formValues, firstName: event.target.value });
    };

    const handleLastNameInputChange = (event) => {
        setFormValues({ ...formValues, lastName: event.target.value });
    };

    const handleEmailInputChange = (event) => {
        setFormValues({ ...formValues, email: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="form-container">
            <h1>Basic form (reactJS)</h1>
            <form onSubmit={submitHandler}>
                {submitted && (
                    <div className="success-alert">
                        Success! Thank you for registering.
                    </div>
                )}
                <input
                    type="text"
                    className="form-field"
                    value={formValues.firstName}
                    name="First name"
                    placeholder="First name"
                    onChange={handleFirstNameInputChange}
                ></input>
                <input
                    type="text"
                    className="form-field"
                    value={formValues.lastName}
                    name="Last name"
                    placeholder="Last name"
                    onChange={handleLastNameInputChange}
                ></input>
                <input
                    type="email"
                    className="form-field"
                    value={formValues.email}
                    name="Email"
                    placeholder="Email"
                    onChange={handleEmailInputChange}
                ></input>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default App;
