import React from 'react'
import styles from './index.module.css'
const Dashboard = () => {
  return (
    <>
     <h2 className={styles.dashboardheading}>Hello Rosie!</h2>
     <p className={styles.dashboardpara}>From your account dashboard. you can easily check & view your <span className={styles.dashboardspan}>recent orders,</span> 
     manage your <span className={styles.dashboardspan}>shipping and billing addresses </span>  and <span className={styles.dashboardspan}>edit your password and account details.</span> </p>
    </>
  )
}

export default Dashboard
