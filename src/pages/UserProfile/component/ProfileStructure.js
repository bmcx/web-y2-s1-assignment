import React, { Component } from "react";

class ProfileStructure extends Component {
  render() {
    return (
      <div className="h-full">
        <div className="flex bg-red-200 w-full h-80">
          <div className="bottom-0 self-end flex flex-row ">
            <div className="bg-gray-400 w-32 h-32">{/* profile picture */}</div>
            <div className="flex flex-col">
              <div>John Doe</div>
              <div>Keels staff</div>
              <div>etc...</div>
            </div>
          </div>
        </div>
        <div className="bg-green-200 h-80 w-full">
            {/* profile content */}
            hah
        </div>
      </div>
    );
  }
}

export default ProfileStructure;
