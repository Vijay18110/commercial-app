import React from 'react'
import styles from './index.module.css'
import { FaStar } from 'react-icons/fa'
import { BiStar } from 'react-icons/bi'
const GridCatogory = ({ icon, name, counter, price, star, title, img, tagicon }) => {
  return (
    <>
      {name ? counter ? <div className={styles.categorylist}>
        <img src={icon} className={styles.iconname} alt='gridpics' />
        <span className={styles.catogoryname}>{name}</span>
        <span className={styles.counter}>{counter}</span>
      </div>
        :
        <div className={styles.taglist}>
          <i>{tagicon}</i>
          <span className={styles.tagname}>{name}</span>
        </div>
        :
        <div className={star ? styles.trending : styles.gridgallery}>
          <div className={styles.imgcont}>
            <img src={img} className={styles.img} alt='gridpics' />
          </div>
          <div className={styles.contentcont}>
            <h4 className={styles.title}>{title}</h4>
            {price && <span className={styles.price}>${price}</span>}
            {star && <p>
              {
                [1, 2, 3, 4, 5].map(it => {
                  return it <= star ? <FaStar color='rgb(231, 183, 12)' /> : <BiStar />
                })
              }
            </p>
            }
          </div>

        </div>

      }
    </>
  )
}

export default GridCatogory
