import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError() as { message: any }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">Oops!</h1>
          <p>Sorry, an unexpected error has occured</p>
          <p>
            <em>{error.message}</em>
          </p>
        </div>
      </div>
    </div>
  )
}
