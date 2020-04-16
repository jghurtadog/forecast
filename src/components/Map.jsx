import React from "react"
import GoogleMap from 'google-map-react';
//https://github.com/google-map-react/google-map-react
const Map = ({ result }) => {
  const { coord, name } = result
  if (!name) return null;
  const markerStyle = {
    height: '50px',
    width: '50px',
    marginTop: '-50px'
  }

  const imgStyle = {
    height: '100%'
  }

  const AnyReactComponent = ({ title }) => (
    <div style={markerStyle}>
      <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
      {/*<h4>{title}</h4>*/}
    </div>
  );
  return (
    <div className="card-panel white col s12">
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyALCr9alSkaUyTNfKFRpzQ24tvtkuxDECM" }}
          center={{ lat: coord.lat, lng: coord.lon }}
          zoom={9}
        >
          <AnyReactComponent
            lat={coord.lat}
            lng={coord.lon}
            title={name}
          />
        </GoogleMap>
      </div>
    </div>

  );
}

export default Map;