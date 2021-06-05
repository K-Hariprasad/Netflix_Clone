import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import './Drawer.css'
import movieTrailer from 'movie-trailer'
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles({
    paper:{
        background:'#111',
    }
  });

function Drawer({closeDrawer,showDetails}) {
    let history = useHistory()
    const classes = useStyles()
    const truncate = (str,n) => {
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
    const handlePlay = (showDetails) => {
        movieTrailer(showDetails?.name || showDetails?.title || showDetails?.original_name ||'').then( url => {
            const trailerUrl = new URLSearchParams(new URL(url).search)
            const videoId = trailerUrl.get('v')
            history.push({pathname:`/play/${videoId}`, state:showDetails})
            closeDrawer()
        }).catch(error => alert(error.message))
    }
    return (
            <SwipeableDrawer classes={{paper:classes.paper}}
                anchor="bottom"
                open={true}
                onClose={()=>closeDrawer()}
            >
                <div className="drawer_contents">
                    <img className="drawer_poster" alt={showDetails?.title || showDetails?.name || showDetails?.original_name} src={"https://image.tmdb.org/t/p/original/"+showDetails?.poster_path}></img>
                    <div className="drawer_details">
                        <h3>{showDetails?.title || showDetails?.name || showDetails?.original_name}</h3>
                        <h6>{truncate(showDetails?.overview,100)}</h6>
                        <div className="drawer_button_section">
                            <button className="drawer_button" onClick={()=>handlePlay(showDetails)}>Play</button>
                            <button className="drawer_button">Deatils & more</button>
                        </div>
                    </div>
                </div>
          </SwipeableDrawer>
    )
}

export default Drawer
