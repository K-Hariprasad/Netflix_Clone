const API_KEY = "5c29f0f9c8e84f1c49080818db1c037e"
const base_url = 'https://api.themoviedb.org/3'
const requests = {
    fetchTrending : `${base_url}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `${base_url}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `${base_url}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests
