import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { iMovie } from "../types"

const Movies = () => {
  const [movies, setMovies] = useState<iMovie[]>([])

  useEffect(() => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const requestOptions = {
      method: "GET",
      headers,
    }

    fetch(`http://localhost:8080/movies`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

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
