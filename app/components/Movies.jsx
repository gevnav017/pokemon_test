import React, { useState, useEffect } from 'react'

const Movies = () => {
  const [movies, setMovies] =useState([])
  const [newMovie, setNewMovie] = useState("")

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json()
        setMovies(data.results)
      }
      catch (err) {
        console.log(err)
      }
    }

    getMovies()
  }, [])

  // const insertMovie = () => {
  //   fetch("http://localhost/movies", {
  //     method: "POST",
  //     body: JSON.stringify({ newMovie }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log("Inserted movie " + data.movie + " successfully"))
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  return (
    <>
      <h1>Movies</h1>

      {movies.map((pokemon) => 
        <div key={pokemon.id}>{pokemon.name}</div>
      )}

    </>
  )
}

export default Movies