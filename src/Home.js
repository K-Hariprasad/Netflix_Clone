import React from 'react'
import Row from './Row';
import requests from './request'
import Banner from './Banner';
import Drawer from './Drawer';
import { useState } from 'react';

function Home() {
    const [show,setShow] = useState()
    const handleSelection = (showDetails) => {
        setShow(showDetails)
    }
    const closeDrawer = () => {
        setShow()
    }
    return (
        <div>
            <Banner/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} handleSelection={handleSelection}></Row>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} handleSelection={handleSelection}></Row>
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedIndianMovies} handleSelection={handleSelection}></Row>
            <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} handleSelection={handleSelection}></Row>
            {show?<Drawer closeDrawer={closeDrawer} showDetails={show}/>:null}
        </div>
    )
}

export default Home
