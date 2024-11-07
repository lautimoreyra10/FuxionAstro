import React from "react";
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Fuxion</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
