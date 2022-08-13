import React from 'react'
import './HomeScreen.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import requests from './Service/requests'
import Row from './Components/Row'
function HomeScreen() {
  console.log(requests.fetchComedyMovies,"URL")
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      {/* <Row fetchUrl={ requests.fetchComedyMovies} /> */}
      <Row title='NETFLIX ORIGINALS' isLargeRow fetchUrl={requests.fetchNetflixOriginal} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTrending} />
      <Row title='Comody Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documantary Movies' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
