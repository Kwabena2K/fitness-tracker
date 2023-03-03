import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center bg-black text-white">
      <p>
        &copy; {new Date().getFullYear()} Designed by{" "}
        <a href="https://kwabenaosei.com/" className="text-sky-500">
          Kwabena Osei
        </a>
      </p>
    </div>
  );
}
export default Footer;
