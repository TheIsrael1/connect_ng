import React from 'react'
import styles from './form.module.css'
const Form = ({
children,
  header,
  submitButtonName,
  disabled,
  handleSubmit,
  activeLink,
  toggle
}) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>

            <div className={styles.top}>
            <div className={styles.headers1} onClick={toggle}>
                <h1 className={`${!activeLink ? styles.header : styles.headerDisabled}`}>Signup</h1>
                <span className={`${!activeLink ? styles.headerSpan : styles.headerSpanDisabled}`}></span> 
            </div>
            <div className={styles.headers2} onClick={toggle} >
                <h1 className={`${activeLink ? styles.header : styles.headerDisabled}`}>Login</h1>
                <span className={`${activeLink ? styles.headerSpan : styles.headerSpanDisabled}`}></span> 
            </div>
            </div>
            <form
          className={`${styles.form}`}
          onSubmit={handleSubmit}
          method="post"
          action=""
        >
          <div className={`${styles.inputSection}`}>{children}</div>

          <div className={`${styles.btnContainer}`}>
            <button
              disabled={!disabled}
              className={`${styles.btn}`}
              value="submit"
              type="submit"
            >
              {submitButtonName}
            </button>
          </div>

         
        </form>
            </div>
        </div>
    )
}

export default Form
