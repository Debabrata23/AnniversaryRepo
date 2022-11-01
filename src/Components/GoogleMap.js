import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="imageMap">{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 22.5587,
      lng: 88.3576
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '386px', width: '100%',marginLeft:'11px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={22.5587}
          lng={88.3576}
          text="Green In Banquet"

        />
      </GoogleMapReact>
    </div>
  );
}