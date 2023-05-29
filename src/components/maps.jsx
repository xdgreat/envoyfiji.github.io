import React from "react";

const Maps = () => {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=MGM High School&t=&z=17&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Maps;
