import React from "react";

const ContactUs = () => {
  return (
    <div className="card bg-dark">
      <h1>Contact Us</h1>
      {/* <a href="mailto:someone@yoursite.com? &subject=Big%20News&body=Email-content-here">
        <i class="fas fa-envelope-square"></i> Email Us
      </a> */}

      <form
        action="mailto:luyandamabozo@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <h6>
          <b>Name:</b>
        </h6>
        <br />
        <input type="text" name="name" required />
        <br />
        <h6>
          <b>Email:</b>
        </h6>
        <br />
        <input type="text" name="mail" required />
        <br />
        <h6>
          <b>Comment:</b>
        </h6>
        <br />
        <input type="text" name="comment" size="50" required />
        <br />
        <br />
        <button className="btn btn-warning btn-sm">
          <input type="submit" value="Send" required />
        </button>
        <button className="btn btn-warning btn-sm">
          <input type="reset" value="Reset" required />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
