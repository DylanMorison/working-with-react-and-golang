import { FC } from "react"

interface Props {
  className: string
  message: string
}

const Alert: FC<Props> = (props) => {
  return (
    <div className={"alert " + props.className} role="alert">
      {props.message}
    </div>
  )
}

export default Alert
