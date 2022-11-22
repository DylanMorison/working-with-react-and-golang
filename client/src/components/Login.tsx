import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { Input } from "./form/input"

type setJwtTokenType = (jwtToken: string) => void
type setAlertMessageType = (jwtToken: string) => void
type setAlertClassNameType = (jwtToken: string) => void

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { setJwtToken, setAlertClassName, setAlertMessage } = useOutletContext<{
    setJwtToken: setJwtTokenType
    setAlertMessage: setAlertMessageType
    setAlertClassName: setAlertClassNameType
  }>()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log("email/pass", email, password)

    if (email === "admin@example.com") {
      setJwtToken("abc")
      setAlertClassName("d-none")
      setAlertMessage("")
      navigate("/")
    } else {
      setAlertClassName("alert-danger")
      setAlertMessage("invalid credentials")
    }
  }

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        />

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
        />

        <hr />

        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  )
}

export default Login
