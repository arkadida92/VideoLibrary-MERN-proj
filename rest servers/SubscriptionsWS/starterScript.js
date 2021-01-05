const axios = require('axios')

axios.get('https://api.tvmaze.com/shows').then(resp => {
    let movies = resp.data.map(movie => {
        return { name: movie.name, genres: movie.genres, image: movie.image.medium, premiered: movie.premiered }
    })

    movies.map(async movie => {
        await axios.post('http://localhost:8000/api/movies', movie, err => {
            if (err) console.log(err)
        })
    })
}).catch(err => console.log(err))

axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
    let members = resp.data.map(member => { return { name: member.name, email: member.email, city: member.address.city } })

    members.map(async member => {
        await axios.post('http://localhost:8000/api/members', member, err => { if (err) console.log(err) })
    })
}).catch(err => console.log(err))