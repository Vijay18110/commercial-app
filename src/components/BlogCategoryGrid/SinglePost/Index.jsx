import React from "react";
import styles from "./index.module.css";
import RightSearch from "../RightSideBar/RightSearch/Index";
import RightSideBar from "../RightSideBar/Index";
import Container from "../../../ui/Container";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import author from '../../../assets/BlogGridIcons/author.png'
import blog19 from '../../../assets/BlogGridPics/blog19.png'
import blog20 from '../../../assets/BlogGridPics/blog20.png'
const SinglePost = () => {
  return (
    <>
    <Container>
      <div className={styles.singlepost}>
      <div className={styles.leftcontainer}>
        <span className={styles.singlepostspan}>Recipes</span>
        <h2 className={styles.singlepostheading}>Best smartwatch 2024: the top wearables you can buy today</h2>
        <div className={styles.profile}>
        <div className={styles.authorcontainer}>
          <span><img src={author} alt=""  className={styles.author}/></span>
          <span>By <span className={styles.authorspan}>Sugar Rosie</span></span>
          <span>2 hours ago</span>
          <span>8 mins read</span>
        </div>
        <div className={styles.bookmark}>
        <i><CiBookmark size={20}/></i>
        <i><CiHeart size={25}/></i>
        </div>
        </div>
      </div>
        <RightSearch />
      </div>
      <RightSideBar blog19={blog19} blog20={blog20} />
      </Container>
    </>
  );
};

export default SinglePost;
