import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "30vh",
    width: "100%",
    border: "2px solid black",
  };
  return (
    <footer style={footerStyle}>
      <section class="footer">
        <div class="share">
          <a
            href="https://www.linkedin.com/in/sourabh-kakani-58a7a8229/"
            class="fab fa-linkedin"
            target="_blank"
          ></a>
          <a
            href="https://api.whatsapp.com/send/?phone=8290244123&text&type=phone_number&app_absent=0"
            target="_blank"
            class="fab fa-whatsapp"
          ></a>
          <a
            href="https://www.instagram.com/_sourabh__005/"
            class="fab fa-instagram"
            target="_blank"
          ></a>
        </div>

        <div class="credit">
          All Rights Reserved. Copyright © <span> Sourabh kakani</span>.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
