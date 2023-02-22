import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center ">
      <p className="text-sm mt-2  opacity-75 text-white">
        {/* calendar function to update to the current year */}
        &copy; {new Date().getFullYear()} Designed by Kwabena Osei
      </p>
    </div>
  );
}

export default Footer;
