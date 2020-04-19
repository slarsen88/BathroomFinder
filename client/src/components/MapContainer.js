import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import InfoWindowContent from './InfoWindowContent'
import axios from 'axios'
import image from '../assets/poop.png'

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: {
      lat: null,
      lng: null,
    },
    bathrooms: [
      {
        hours: '9-5',
        title: 'Kings Throne',
        name: 'Kings Throne',
        lat: 47.4985562,
        lng: -122.1481419633,
        amenities: {
          ADA: false,
          NeedleDispenser: false,
          BabyChanger: true,
        },
      },
      {
        hours: '10-6',
        title: 'Porcelain Throne',
        name: 'Porcelain Throne',
        lat: 47.359423,
        lng: -122.021071,
        amenities: {
          ADA: true,
          NeedleDispenser: true,
          BabyChanger: true,
        },
      },
      {
        hours: '1-8',
        title: 'Port-o-potty',
        name: 'Port-o-potty',
        lat: 47.2052192652,
        lng: -121.988426208,
        amenities: {
          ADA: false,
          NeedleDispenser: false,
          BabyChanger: false,
        },
      },
      {
        hours: '12-4',
        title: 'Litter Box',
        name: 'Litter Box',
        lat: 47.6307081,
        lng: -122.1434325,
        amenities: {
          ADA: false,
          NeedleDispenser: true,
          BabyChanger: false,
        },
      },
      {
        hours: '10-3',
        title: 'Fire Hydrant',
        name: 'Fire Hydrant',
        lat: 47.308448,
        lng: -122.21401212,
        amenities: {
          ADA: false,
          NeedleDispenser: true,
          BabyChanger: true,
        },
      },
      {
        hours: '12-12',
        title: 'bathroom 6',
        name: 'bathroom 6',
        lat: 47.5524695,
        lng: -122.0425047,
        amenities: {
          ADA: true,
          NeedleDispenser: true,
          BabyChanger: true,
        },
      },
    ],
  }
  displayMarkers = () => {
    const { google } = this.props
    return this.state.bathrooms.map((bathroom, index) => {
      return (
        <Marker
          key={index}
          id={index}
          title={bathroom.title}
          name={bathroom.name}
          position={{
            lat: bathroom.lat,
            lng: bathroom.lng,
          }}
          icon={{
            url: image,
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(32, 32),
          }}
          onClick={this.onMarkerClick}
        />
      )
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  showInfoContent = () => {
    const bathroom = this.state.bathrooms[this.state.selectedPlace.id]
    return <InfoWindowContent bathroom={bathroom} />
  }

  handleClick = async () => {
    const results = await axios.get(
      'https://ajizffk6n8.execute-api.us-west-2.amazonaws.com/default/getAllBathrooms',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
      }
    )
    console.log(results)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>test</button>
        <Map
          google={this.props.google}
          disableDefaultUI={true}
          zoomControl={true}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
          onClick={this.onMapClicked}
        >
          {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            {this.showInfoContent()}
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

const mapStyles = {
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer)
