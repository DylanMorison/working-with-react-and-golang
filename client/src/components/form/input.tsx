import { forwardRef } from "react"

interface iProps {
  name?: string
  title?: string
  className?: string
  id?: string
  ref?: any
  placeholder?: string
  onChange?: any
  autoComplete?: any
  value?: string
  type?: string
  errorDiv?: any
  errorMsg?: any
}

export const Input = forwardRef((props: iProps, ref: any) => {
  return (
    <div className="md-3">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        type={props.type}
        className={props.className}
        id={props.name}
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  )
})
