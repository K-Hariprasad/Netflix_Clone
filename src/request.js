const API_KEY = "5c29f0f9c8e84f1c49080818db1c037e"
const base_url = 'https://api.themoviedb.org/3'
const requests = {
    fetchTrending : `${base_url}/trending/all/week?api_key=${API_KEY}&language=hi-IND`,
    fetchNetflixOriginals : `${base_url}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedIndianMovies : `${base_url}/movie/top_rated?api_key=${API_KEY}&region=IN`,
    fetchPopularMovies : `${base_url}/movie/popular?api_key=${API_KEY}&region=IN`,
}

export default requests
