const axios = require('axios')

const subsUrl = 'http://localhost:8000/api/subscriptions'

exports.getSubscriptions = () => {
    return axios.get(subsUrl)
}

exports.getSubscription = id => {
    return axios.get(`${subsUrl}/${id}`)
}

exports.addSubscription = (memberId, movieId) => {
    return axios.put(`${subsUrl}/${memberId}`, {
        movieId
    })
}

const membersUrl = 'http://localhost:8000/api/members'

exports.getMembers = () => {
    return axios.get(membersUrl)
}

exports.addMember = (name, email, city) => {
    return axios.post(membersUrl, {
        name,
        email,
        city
    })
}

exports.getMember = id => {
    return axios.get(`${membersUrl}/${id}`)
}

exports.updateMember = (id, name, email, city) => {
    return axios.put(`${membersUrl}/${id}`, {
        name,
        email,
        city
    })
}

exports.deleteMember = id => {
    return axios.delete(`${membersUrl}/${id}`)
}


const moviesUrl = 'http://localhost:8000/api/movies'

exports.getMovies = () => {
    return axios.get(moviesUrl)
}

exports.addMovie = (name, genres, image, premiered) => {
    return axios.post(moviesUrl, {
        name,
        genres,
        image,
        premiered
    })
}

exports.getMovie = id => {
    return axios.get(`${moviesUrl}/${id}`)
}

exports.updateMovie = (id, name, genres, image, premiered) => {
    return axios.put(`${moviesUrl}/${id}`, {
        name,
        genres,
        image,
        premiered
    })
}

exports.deleteMovie = id => {
    return axios.delete(`${moviesUrl}/${id}`)
}


const watchedSubsUrl = 'http://localhost:8000/api/watchedSubs'

exports.getWatchedSubs = () => {
    return axios.get(`${watchedSubsUrl}`)
}

exports.getMemberWatchedSub = async id => {
    return axios.get(`${watchedSubsUrl}/${id}`)
}