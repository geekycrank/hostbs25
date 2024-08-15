import React from 'react';

function Register() {
  return (
    <div>
      <h1>Register for Brainstrain</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
