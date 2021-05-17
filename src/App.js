import Row from './Row';
import './App.css'
import requests from './request'
import Banner from './Banner';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}></Row>
    </div>
  );
}

export default App;
