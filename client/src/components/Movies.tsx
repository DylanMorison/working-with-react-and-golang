import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { iMovie } from "../types"

const Movies = () => {
  const [movies, setMovies] = useState<iMovie[]>([])
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      const headers = new Headers()
      headers.append("Content-Type", "application/json")

      const requestOptions = {
        method: "GET",
        headers,
      }

      try {
        const response = await fetch("http://localhost:8080/movies", requestOptions)
        const data = await response.json()
        setMovies(data)
      } catch (err) {
        console.error(err)
        setError(err)
      }
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    if (error) alert(error)
  }, [error])

  return (
    <div>
      <h2>Movies</h2>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Movies
