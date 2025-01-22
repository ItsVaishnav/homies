import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="nav_bar">
        <div className="left_part">
          <img src="images/menu.png" alt="" className="menu" id="menu" />
          <label>Homie's</label>
        </div>
        <div className="right_part">
          <ul>
            <a href="index.php">
              <li>Home</li>{" "}
            </a>
            <a href="Add_home.php">
              <li>Add Flats</li>{" "}
            </a>
            <a href="flats.php">
              <li>Flat's</li>{" "}
            </a>
            <a href="feedback.php">
              <li>Feedback</li>{" "}
            </a>
            <a href="LoginEntry.php">
              <li>Login</li>{" "}
            </a>
            <a href="logout.php">
              <li>Logout</li>{" "}
            </a>
            <a href="About_us.php">
              <li>About us</li>{" "}
            </a>
            <a href="chat.php">
              <li>Chat</li>{" "}
            </a>
          </ul>
        </div>
      </div>
      <div className="left_nav" id="left_nav">
        <div className="login">
          <div className="logo">
            <img src="images/profile.jfif" alt="" className="profile" />
          </div>
          <div className="name">
            <h4>Guest123</h4>
            <a href="Register.php">
              <button>Register</button>
            </a>
          </div>
        </div>
        <ul>
          <li>
            <a href="About_us.php">About Us</a>
          </li>
          <li>
            <a href="Add_home.php">Add Flats </a>
          </li>
          <li>
            <a href="flats.php">Flats </a>
          </li>
          <li>
            <a href="nearcollage.php">Near College Area </a>
          </li>
          <li>
            <a href="feedback.php">Feedback</a>
          </li>
          <li>
            <a href="chat.php">Chat</a>
          </li>
          <li>
            <a href="logout.php">Logout</a>
          </li>
          <li>
            <a href="LoginEntry.php">Login </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
