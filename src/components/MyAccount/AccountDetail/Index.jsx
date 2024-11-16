import React from 'react'
import styles from './index.module.css'
import SubmitButton from '../../../widgets/SubmitButton/Index'
const Account = () => {
  return (
    <>
     <h2 className={styles.accountheading}>Account Details</h2>
     <p className={styles.accountpara}>Already have an account? <span className={styles.accountspan}>Log in instead!</span></p>
     <div className={styles.formcontainer}>
        <div className={styles.namecontent}>
            <div className={styles.firstname}>
                <label>First Name *</label>
                <input type="text"  className={styles.innerinput} />
            </div>
            <div className={styles.lastname}>
               <label>Last Name *</label>
                <input type="text" className={styles.innerinput}  />
            </div>
        </div>

            <div>
            <label>Display Name *</label>
            <input className={styles.Outeinput} type="text" />
            </div>
            <div >
             <label>Current Password *</label>
            <input className={styles.Outeinput} type="text" />
            </div>
            <div >
             <label>New Password *</label>
            <input className={styles.Outeinput} type="text" />
            </div>
            <div >
             <label>Confirm Password *</label>
            <input className={styles.Outeinput} type="text" />
            </div>
            <div className={styles.buttoncontainer}>
              <SubmitButton name="Save Change"/>
            </div>
    </div> 
    </>
  )
}

export default Account
