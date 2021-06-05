import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requests from './request'
import './Banner.css'
import { useHistory } from 'react-router'
import movieTrailer from 'movie-trailer'
const base_url_for_image = "https://image.tmdb.org/t/p/original"

function Banner() {
    let history = useHistory()
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(requests.fetchNetflixOriginals).then(res=>{
            setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)])
        })
    }, [])
    const truncate = (str,n) => {
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
    const handlePlay = (showDetails) => {
        movieTrailer(showDetails?.name || showDetails?.title || showDetails?.original_name ||'').then( url => {
            const trailerUrl = new URLSearchParams(new URL(url).search)
            const videoId = trailerUrl.get('v')
            history.push({pathname:`/play/${videoId}`, state:showDetails})
        }).catch(error => alert(error.message))
    }
    return (
        <div className="banner_body" style={{backgroundImage:movie?`url(${base_url_for_image}${movie.backdrop_path})`:`linear-gradient(to bottom right, #090909, #131313)`,
            backgroundSize:'cover',
            backgroundPosition:'center center'}}>
            <div className="banner_container" >
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_button_container">
                    <button className="banner_button" onClick={()=>handlePlay(movie)}>Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h6 className="banner_desc">{truncate(movie?.overview,150)}</h6>
            </div>
            <div className="banner_fade"></div>
        </div>
    )
}

export default Banner
