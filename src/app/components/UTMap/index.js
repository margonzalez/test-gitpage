import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  CircleMarker,
  Tooltip,
  TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import UTLabel from 'app/components/UTLabel';

import styles from './styles';

delete L.Icon.Default.prototype._getIconUrl; //eslint-disable-line

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), //eslint-disable-line
  iconUrl: require('leaflet/dist/images/marker-icon.png'), //eslint-disable-line
  shadowUrl: require('leaflet/dist/images/marker-shadow.png') //eslint-disable-line
});

const zonaMock = [
  {
    coordinates: [51.49, -0.08],
    name: 'Zona 0',
    transformadores: [
      {
        coordinates: [51.5, -0.08],
        name: 'AAAA'
      },
      {
        coordinates: [51.51, -0.08],
        name: 'BBBB'
      }
    ]
  },
  {
    coordinates: [52.49, -0.08],
    name: 'Zona 1',
    transformadores: [
      {
        coordinates: [52.5, -0.08],
        name: 'CCCC'
      },
      {
        coordinates: [52.51, -0.08],
        name: 'DDDD'
      }
    ]
  },
  {
    coordinates: [53.49, -0.08],
    name: 'Zona 2',
    transformadores: [
      {
        coordinates: [53.5, -0.08],
        name: 'EEEE'
      },
      {
        coordinates: [53.51, -0.08],
        name: 'FFFF'
      }
    ]
  },
  {
    coordinates: [54.49, -0.08],
    name: 'Zona 3',
    transformadores: [
      {
        coordinates: [54.5, -0.08],
        name: 'GGGG'
      },
      {
        coordinates: [54.51, -0.08],
        name: 'HHHH'
      }
    ]
  }
];

class UTMap extends Component {
  render() {
    const { BaseLayer, Overlay } = LayersControl;
    const center = [51.505, -0.09];
    const rectangle = [[51.49, -0.08], [51.5, -0.06]];

    return (
      <Map style={styles.mapContainer} center={center} zoom={13}>
        <LayersControl checked position="topright">
          <BaseLayer checked name="Full Color">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Black & White">
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          {zonaMock.map((zona, index) => (
            <Overlay checked={this.props.selectedZone === index} name={zona.name}>
              <FeatureGroup>
                {/* <Tooltip sticky>{`Esta es la ${zona.name}`}</Tooltip> */}
                {/* <Popup>{`Esta es la ${zona.name}`}</Popup> */}
                {zona.transformadores.map(trans => (
                  <Fragment>
                    <FeatureGroup>
                      <Marker position={trans.coordinates}>
                        <Popup>{trans.name}</Popup>
                      </Marker>
                      <Tooltip sticky interactive>
                        {zona.name}
                      </Tooltip>
                      <Circle center={trans.coordinates} radius={1000} stroke={false} fillColor="blue" />
                    </FeatureGroup>
                  </Fragment>
                ))}
              </FeatureGroup>
            </Overlay>
          ))}
          {/* <CircleMarker onClick={() => alert('hola')} center={center} fillColor="red" radius={100} /> */}
          {/* <Overlay checked name="Marker">
            <Marker position={center}>
              <Popup>
                <span>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </span>
              </Popup>
            </Marker>
                </Overlay> */}
        </LayersControl>
        {/* <FeatureGroup color="purple">
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup> */}
      </Map>
    );
  }
}

UTMap.propTypes = {
  selectedZone: bool
};

export default UTMap;
