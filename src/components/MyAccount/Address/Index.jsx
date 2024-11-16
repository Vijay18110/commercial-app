import React from 'react'
import styles from './index.module.css'
let data=[
    {
        id:1,
        li1:"Billing Address",
        li2:"3522 Interstate",
        li3:"75 Business Spur",
        li4:"Sault Ste.",
        li5:"Marie, MI 49783",
        li6:"New York",
        li7:"Edit"
    },
    {
        id:2,
        li1:"Shipping Address",
        li2:"4299 Express Lane",
        li3:"Sarasota,",
        li4:"FL 34249 USA",
        li5:"Phone: 1.941.227.4444",
        li6:"Sarasota",
        li7:"Edit"
    },
]
const Address = () => {
  return (
    <>
    <div className={styles.addresscontainer}>
       {
        data.map(it=>{
            return(
                <ul>
                    <h2 className={styles.addressheading}>{it.li1}</h2>
                    <li className={styles.list}>{it.li2}</li>
                    <li className={styles.list}>{it.li3}</li>
                    <li className={styles.list}>{it.li4}</li>
                    <li className={styles.list}>{it.li5}</li>
                    <li className={styles.list}>{it.li6}</li>
                    <li className={styles.list}>{it.li7}</li>
                </ul>
            )
        })
       } 
       </div>
    </>
  )
}

export default Address
