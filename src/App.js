import Row from './Row';
import './App.css'
import requests from './request'
import Banner from './Banner';
import Header from './Header';
import Drawer from './Drawer';
import { useState } from 'react';
function App() {
  const [show,setShow] = useState()
  const handleSelection = (showDetails) => {
    setShow(showDetails)
  }
  const closeDrawer = () => {
    setShow()
  }
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} handleSelection={handleSelection}></Row>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} handleSelection={handleSelection}></Row>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedIndianMovies} handleSelection={handleSelection}></Row>
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} handleSelection={handleSelection}></Row>
      {show?<Drawer closeDrawer={closeDrawer} showDetails={show}/>:null}
    </div>
  );
}

export default App;
