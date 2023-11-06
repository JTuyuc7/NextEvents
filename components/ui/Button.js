import Link from 'next/link'
import classes from './Button.module.css'

const Button = ({ children, goTo, isLink = true, type = 'submit' }) => {
  if (isLink) {
    return (
      <>
        <Link href={goTo} className={classes.btn}>
          {children}
        </Link>
      </>
    )
  }

  if (!isLink) {
    return (
      <>
        <button type={type} className={classes.btn} onClick={goTo}>{children}</button>
      </>
    )
  }
}

export default Button
