import React from "react";

const NavTooltip = ({ children, tooltipText }) => {
  const tipRef = React.createRef(null);
  function handleMouseEnter() {
    tipRef.current.style.opacity = 1;
    // tipRef.current.style.display = "flex";
    tipRef.current.style.marginLeft = "20px";
  }
  function handleMouseLeave() {
    tipRef.current.style.opacity = 0;
    // tipRef.current.style.display = "none";
    tipRef.current.style.marginLeft = "10px";
  }
  return (
    <div className="relative flex items-center z-20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className="absolute whitespace-no-wrap bg-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150 w-32"
        style={{ left: "100%", opacity: 0 }}
        ref={tipRef}
        
      >
        <div
          className="bg-gray-700 h-3 w-3 absolute"
          style={{ left: "-6px", transform: "rotate(45deg)" }}
        />
        Chandima Bandara
      </div>
      <div  >
        {children}
      </div>
    </div>
  );
};

export default NavTooltip;
