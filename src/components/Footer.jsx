import React from "react";

function Footer() {
  return (
    <div className=" text-center  text-black font-body">
      <div className="relative bottom-0 left-0 w-full overflow-hidden line-height">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          className="relative w-full h-99"
        >
          {/* <path d="M1200 0L0 0 598.97 114.72 1200 0z" fill="#404041"></path> */}
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ed7332"
          ></path>
        </svg>
      </div>
      <p className=" pb-10">
        &copy; {new Date().getFullYear()} Designed by{" "}
        <a href="https://kwabenaosei.com/" className=" hover:text-blue-700">
          Kwabena Osei
        </a>
      </p>
    </div>
  );
}
export default Footer;
