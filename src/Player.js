import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import './Player.css'
import {fetchSimilarMovies} from './request';
import Row from './Row'
import Drawer from "./Drawer";
function Player(props) {
  const opts = {
    height : '400',
    width : '100%',
    playerVars : {
      autoplay : 1
    }
  }
  const [url,setUrl] = useState()
  const [show,setShow] = useState()
    const handleSelection = (showDetails) => {
        setShow(showDetails)
    }
    const closeDrawer = () => {
        setShow()
    }
  useEffect(()=>{
    if(props.location.state.id){
      setUrl(fetchSimilarMovies(props.location.state.id))
    }
  },[props])
  let params = useParams()
  return (
    <div className="Player_container">
      <YouTube videoId={params?.id} opts={opts}/><br/>
      <Row title="Similar Movies" fetchUrl={url} handleSelection={handleSelection}></Row>
      {show?<Drawer closeDrawer={closeDrawer} showDetails={show}/>:null}
    </div>
  );
}

export default Player;
