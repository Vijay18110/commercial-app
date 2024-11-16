import React from 'react'
import styles from './index.module.css'
const SubmitButton = ({name}) => {
  return (
    <>
     <button  className={styles.btn} >{name}</button> 
    </>
  )
}

export default SubmitButton
