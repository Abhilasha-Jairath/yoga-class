import "./AdmissionForm.css";

const Signup = () => {
  return (
    <>
      <div className="signup">
        <form className="signup_container" method="POST">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Payment Details
          </h1>

          <label className="signup_label" for="name">
            Card Holder Name
          </label>
          <input
            className="signup_input"
            type="text"
            autoComplete="off"
            placeholder="Name on card"
          ></input>
          <label className="signup_label" for="card number">
            Card Number
          </label>
          <input
            className="signup_input"
            type="text"
            autoComplete="off"
            placeholder="3452 **** ****"
          ></input>
          <label className="signup_label" for="CVV">
            CVV
          </label>
          <input
            className="signup_input"
            type="text"
            autoComplete="off"
            placeholder="123"
          ></input>
          <label className="signup_label" for="dateOfBirth">
            Amount
          </label>
          <input
            className="signup_input"
            // type="text"
            value="500"
          ></input>

          <input
            type="submit"
            name="signup"
            id="signup"
            value="Pay Now"
            className="signup_btn"
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
