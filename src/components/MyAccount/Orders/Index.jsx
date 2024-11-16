import React from 'react'
import styles from './index.module.css'
import { orderdata } from '../../../data/orderdata'
const Orders = () => {
  return (
    <>
     <div className={styles.ordercontainer}>
        <h2 className={styles.orderheading}>Your Orders</h2>
        <table>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
               {
                orderdata.map(item=>{
                    return(
                        <tr>
                    <td>{item.order}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.total}</td>
                    <td>{item.action}</td>
                     </tr>
                    )
                })
               }
            </tbody>
        </table>
    </div> 
    </>
  )
}

export default Orders
