import React from 'react'
import SinglePost from '../BlogCategoryGrid/SinglePost/Index'
import Secondlast from '../Secondlast'
import AboutpCart from '../aboutproduct'
import Banner2 from '../Banner2'
import { carddata } from '../../data/aboutpCartdata'
import { secondlastdata } from '../../data/Secondlast'
import banner from "../../assets/banner-9.png";
import bannerbg from "../../assets/banner10.png";


const SinglePostRight = () => {
  return (
    <>
      <SinglePost/>
      <Banner2 it={{
        id: 1,
        title1: "Don’t miss amazing",
        title2: "grocery deals",
        desc: "Sign up for the daily newsletter",
        img: banner,
        img2:bannerbg
      }} />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
      
    </>
  )
}

export default SinglePostRight
