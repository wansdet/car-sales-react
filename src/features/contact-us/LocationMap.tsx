import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GoogleMapReact from 'google-map-react'

interface MarkerProps {
    lat: number
    lng: number
    children: React.ReactNode
}

const Marker: React.FC<MarkerProps> = ({ lat, lng, children }) => (
    <div>{children}</div>
)

const defaultProps = {
    center: {
        lat: 51.44286,
        lng: -0.14827,
    },
    zoom: 12,
}

const LocationMap = () => {
    return (
        <React.Fragment>
            <div style={{ height: '600px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyC65v7VXiL0xHYPNC40b6v0xXnqIhpyta0',
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <Marker lat={51.44286} lng={-0.14827}>
                        <LocationOnIcon />
                    </Marker>
                </GoogleMapReact>
            </div>
        </React.Fragment>
    )
}

export default LocationMap
