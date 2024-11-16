import React from 'react'
import styles from './index.module.css'
import { FaStar } from 'react-icons/fa'
import author from '../../../../assets/BlogGridIcons/author.png'

const RightCard = ({clientpic,name,time,star,about,reply}) => {
  return (
    <>
       <div className={styles.comments}>
              <div className={styles.picname}>
                <img src={clientpic} alt="clientpic" className={styles.authorpic}/>
                <h3>{name}</h3>
              </div>
              <div className={styles.about}>
                <div className={styles.timestar}>
                  <span className={styles.commentname}>{time}</span>
                  <div className={styles.star}>
                  {
                        [1,2,3,4,5].map(it=>{
                          return  it<=star ? <FaStar color="Yellow"/>: <FaStar color="gray"/>
                        })
                    }
                    </div>
                </div>
                <p>{about}<span className={styles.reply}>{reply}</span></p>
              </div>
          </div>
    </>
  )
}

export default RightCard
