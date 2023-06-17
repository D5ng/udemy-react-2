import classes from "./Button.module.css"

function Button({ className, children, type, onClick }) {
  return (
    <button type={type || "button"} onClick={onClick} className={`${className} ${classes.button}`}>
      {children}
    </button>
  )
}

export default Button
