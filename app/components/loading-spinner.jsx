import classes from './loading-spinner.module.css'
const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <span class={classes.loader}></span>
    </div>
  )
}

export default LoadingSpinner