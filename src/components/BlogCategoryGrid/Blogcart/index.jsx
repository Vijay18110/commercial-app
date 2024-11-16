import React from 'react'
import styles from './index.module.css'
const BlogCart = ({img,tag,name,itemName,date,view,time}) => {
  return (
    <>
     <div className={styles.blogcartcontainer}>
        <div className={styles.piccontainer}>
            {tag && <span className={styles.tag}>{tag}</span>}
            <img src={img} alt="" className={styles.gridimg} />
        </div>
        <div className={styles.contentcontainer}>
            <span>{name}</span>
            <h3 className={styles.itemName}>{itemName}</h3>
            <p className={styles.blogcon}>
                <span>{date}</span>
                <span>{view}</span>
                <span>{time}</span>
            </p>
        </div>
    </div> 
    </>
  )
}

export default BlogCart
