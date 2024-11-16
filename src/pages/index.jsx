import React from 'react'
import MyAccount from '../components/MyAccount/Index'
import Container from '../ui/Container'
import BlogCatGrid from '../components/BlogCategoryGrid'
import AboutpCart from '../components/aboutproduct'
import Secondlast from '../components/Secondlast'
import Banner2 from '../components/Banner2'
import { secondlastdata } from '../data/Secondlast'
import { carddata } from '../data/aboutpCartdata'
import banner from "../assets/banner-13.png";
import bannerbg from "../assets/banner10.png";

const MyProfile = () => {
  return (
    <>
      <Container>
      <MyAccount/>
      <Banner2 it={{
        id: 1,
        title1: "Stay home & get your daily needs from our shop",
        title2: "Start You'r Daily Shopping with   Nest Mart",
        desc: "Sign up for the daily newsletter",
        img: banner,
        img2:bannerbg
      }} />
      <AboutpCart cartdata={carddata} />
      <Secondlast productsdata={secondlastdata} />
      </Container>
    </>
  )
}

export default MyProfile
