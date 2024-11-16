import React from 'react'
import styels from './index.module.css'
const Loader = () => {
  return (
    <div className={styels.mainCont}>
         <div className={styels.ring}>
         <span></span>
         Loading..
     </div>
    </div>
  )
}

export default Loader