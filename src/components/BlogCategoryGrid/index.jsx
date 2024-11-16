import React, { useState } from "react";
import Container from "../../ui/Container";
import SectionTitle from "../../shared/SectionTitle";
import pic1 from "../../assets/BlogGridIcons/pic-1.svg";
import styles from "./index.module.css";
import { PiSquaresFour } from "react-icons/pi";

import { TbSortDescending2 } from "react-icons/tb";
import { RiArrowDownSLine } from "react-icons/ri";

import RightSearch from "./RightSideBar/RightSearch/Index";
import RightSideBar from "./RightSideBar/Index";
import Banner2 from "../Banner2";
import AboutpCart from "../aboutproduct";
import Secondlast from "../Secondlast";
import { carddata } from "../../data/aboutpCartdata";
import { secondlastdata } from "../../data/Secondlast";
import banner from "../../assets/banner-13.png";
import bannerbg from "../../assets/banner10.png";

let data = [
  {
    id: 1,
    log1: <PiSquaresFour color="rgb(165, 163, 163)" size={20} />,
    content: "Show:50",
    logo2: <RiArrowDownSLine color="rgb(165, 163, 163)" />,
    li1:"50",
    li2:"100",
    li3:"150",
    li4:"200",
    li5:"All",
  },
  {
    id: 2,
    log1: <TbSortDescending2 color="rgb(165, 163, 163)" size={20} />,
    content: "Sort:Featured",
    logo2: <RiArrowDownSLine color="rgb(165, 163, 163)" />,
    li1:"Featured",
    li2:"Newest",
    li3:"Most Comment",
    li4:"Realse Date",
    li5:"All",
  },
];
const BlogCatGrid = () => {

 const [toggle,settoggle]= useState(false);
 const[id,setid]=useState(0);
//  const[name,setname]=useState("")

 const hangletoggle=(id)=>{
  settoggle( !toggle)
  setid(id)
 }

//  const getlist=(name)=>{
//   setname(name);

//  }

  return (
    <>
      <Container>
        <div className={styles.blogcatcontainer}>
          <div className={styles.leftcontainer}>
            <div className={styles.logogridcontainer}>
              <img src={pic1} alt="milkspic" className={styles.piclogo} />
              <SectionTitle title=" Recips Articles" />
            </div>
            <div className={styles.dropdown}>
              {data.map((it) => {
                // setname(it.li1)
                return (
                  <>
                    <div key={it.id} onClick={()=>hangletoggle(it.id)} className={styles.show}>
                      <i>{it.log1}</i>
                      { it.content}
                      <i>{it.logo2}</i>
                    </div>
                    <div style={toggle && it.id===id? { height:"200px" , paddingTop:"15px"} :{height:"0px"}} className={it.id==1? styles.listcontainer1: styles.listcontainer2}>
                        <ul>
                          <li  className={styles.list}>{it.li1}</li>
                          <li  className={styles.list}>{it.li2}</li>
                          <li  className={styles.list}>{it.li3}</li>
                          <li  className={styles.list}>{it.li4}</li>
                          <li  className={styles.list}>{it.li5}</li>
                        </ul>
                      </div>
                  </>
                );
              })}
            </div>
           
          </div>
         
       <RightSearch/>         
        </div>
        <RightSideBar/>
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
  );
};

export default BlogCatGrid;
