import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MapContainer from './components/MapContainer'
import FilterWindow from './components/FilterWindow'

import GlobalStyle from './styles/Global'
import './App.css'

// function App() {
//   return <>
//   <NavBar/>
//   <GlobalStyle />
//   </>
// }

class App extends Component {
  state = {
    navbarOpen: false,
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
        <FilterWindow />
        <MapContainer />
      </>
    )
  }
}

export default App
