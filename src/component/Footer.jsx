import React from "react";
import "../styles/footer.scss";
import logo from "../assets/logo.png";
import cxilogo from "../assets/cxi_logo.png";

function Footer() {
  return (
    <div
      className=" w-full flex justify-evenly items-center flex-col bg-transparent  pb-1"
      id="footer"
    >
      <div className="container bg-transparent flex justify-evenly items-center flex-wrap gap-10">
        <div
          className="bg-transparent text-white flex flex-col items-center fs-container  text-center p-10"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <a href="http://" className="bg-transparent">
            <img src={logo} className="bg-transparent" alt="Fs" />
          </a>
          <h1 className="bg-transparent text-3xl">GDG Cloud Noida</h1>
          <p className="bg-transparent text-lg">
            One of biggest competitive activity , providing an opportunity to
            showcase your skills and grow with us.
          </p>
        </div>
        <div
          className="bg-transparent text-white flex flex-col items-center cxi-container  text-center gap-1 p-10"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <a href="https://cxi-miet.github.io/" className="bg-transparent">
            <img src={cxilogo} className="bg-transparent" alt="Fs" />
          </a>
          <div className="bg-transparent">
            <h1 className="bg-transparent text-2xl">
              COLLABORATION X INNOVATION
            </h1>
            <p className="bg-transparent text-sm">
              The club aims to bring in collaboration from the students so as to
              build products Or provide services that solve a common problem or
              give shape to an innovative idea while working in teams and
              learning with experience.
            </p>
          </div>
        </div>
      </div>
      <div
        className="bg-transparent text-white flex flex-col items-center gap-10 text-container text-center p-10"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="text-3xl text-white bg-transparent">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://cxi-miet.github.io/"
            className="underline bg-transparent text-blue-500"
          >
            CXI
          </a>
          , Meerut Institute Of Engineering and Technology, Meerut, 250005.
        </h1>
        <h1 className="text-xl text-white bg-transparent">
          Designed by{" "}
          <a
            href="https://github.com/devcode8"
            className="underline bg-transparent"
          >
            Dev Chauhan
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
