import React from "react";
import styles from "./index.module.css";
import { BlogGridCatData } from "../../../data/BlogCatGridData";
import BlogCart from "../Blogcart";
import GridCatogory from "../GridCategory/Index";
import { GridCategorydata } from "../../../data/GridCategorydata";
import { trendingdata } from "../../../data/Trending";
import { gridpicdata } from "../../../data/GridGallery";
import { populartagdata } from "../../../data/PopularTags";
import { FaArrowDown, FaFacebook, FaInstagram, FaSearch, FaStar, FaTwitter } from "react-icons/fa";
import SubmitButton from "../../../widgets/SubmitButton/Index";
import author from '../../../assets/BlogGridIcons/author.png'
import { BiStar } from "react-icons/bi";
import RightCard from "./RightCard/Index";
import { singlepostdata } from "../../../data/Singlepostdata";
const RightSideBar = ({blog19,blog21,blog20}) => {
  return (
    <>
      <div className={styles.contentcontainer}>
        <div className={styles.cartcontainer}>
        {blog19?
        <div className={styles.leftsinglepost}>
          <div className={styles.imgcontainer}>
            <img src={blog19} className={styles.img} alt="" />
          </div>
          <div className={styles.content}>
            <p className={styles.para}>Helping everyone live happier, healthier lives at home through their kitchen. Kitchn is a daily food magazine on the Web celebrating life in the kitchen through home cooking and kitchen intelligence.</p>
          <p>We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.</p>
          <p>Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you’ll see it show up in a lot of these devices.</p>
         <h3 className={styles.SinglepostHeading}>Lorem ipsum dolor sit amet consectetur.</h3>
         <p className={styles.para1}>
         Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.
         </p>
         <img src={blog20} alt="" />
         <p className={styles.para1}>
         Tortor, lobortis semper viverra ac, molestie tortor laoreet amet euismod et diam quis aliquam consequat porttitor integer a nisl, in faucibus nunc et aenean turpis dui dignissim nec scelerisque ullamcorper eu neque, augue quam quis lacus pretium eros est amet turpis nunc in turpis massa et eget facilisis ante molestie penatibus dolor volutpat, porta pellentesque scelerisque at ornare dui tincidunt cras feugiat tempor lectus
         </p>
         <div className={styles.postcard}>
          <p>Integer eu faucibus dolor <sup>[5]</sup>. Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.</p>
         </div>
         <p className={styles.para1}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero convallis feugiat. Nulla faucibus facilisi tincidunt a arcu, sem donec sed sed. Tincidunt morbi scelerisque lectus non. At leo mauris, vel augue. Facilisi diam consequat amet, commodo lorem nisl, odio malesuada cras. Tempus lectus sed libero viverra ut. Facilisi rhoncus elit sit sit.
         </p>
         <div className={styles.socialmedia}>
            <div className={styles.btncontainer}>
              <SubmitButton name="Deer"/>
              <SubmitButton name="Nature"/>
              <SubmitButton name="Conserve"/>
            </div>
            <div className={styles.socialicon}>
              <span>Share This:</span>
              <FaFacebook/>
              <FaTwitter/>
              <FaInstagram/>
            </div>
          </div>
          <div className={styles.authorprofile}>
            <div className={styles.authorpiccontainer}>
              <img src={author} alt="authorpic" className={styles.authorpic}/>
              <div>
              <span className={styles.authorname}>Barbara Cartland</span>
              <p>
                <span>306 posts</span>
                <span>Since 2012</span>
              </p>
              </div>
            </div>
            <div className={styles.about}>
              <p>Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id enim, libero sit. Est donec lobortis cursus amet, cras elementum libero</p>
            </div>
          </div>
          <div className={styles.leavecomment}>
            <h2 className={styles.leave}>Leave A Comment</h2>
            <div className={styles.star}>
            <FaStar color="gray"/>
            <FaStar color="gray"/>
            <FaStar color="gray"/>
            <FaStar color="gray"/>
            <FaStar color="gray"/>
            </div>
            <div className={styles.formcontainer}>
              <div className={`${styles.textarea} ${styles.marginbottom}`}>
              <textarea rows={10} placeholder="Write Comment..."></textarea>
              </div>
              <div className={`${styles.nameemail} ${styles.marginbottom}`}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email"  />
              </div>
              <div className={`${styles.website} ${styles.marginbottom}`}>
              <input type="text" placeholder="Website." />
              </div>
              <div className={styles.btncontainer}>
                <SubmitButton name="Post Comment"/>
              </div>
            </div>
          </div>
          {
            singlepostdata.map(it=>{
              return <RightCard key={it.id} clientpic={it.clientpic} name={it.name} time={it.time} star={it.star} about={it.about} reply={it.reply}/>
            })
          }
         
          </div>
         
        </div>
        :
        BlogGridCatData.map((it) => {
            return (
              <BlogCart
                key={it.id}
                tag={it.tag}
                name={it.name}
                img={it.img}
                itemName={it.itemName}
                date={it.date}
                view={it.view}
                time={it.time}
              />
            );
          })}
        </div>
        <div className={styles.rightcont}>
          <div className={styles.catogory}>
            <h2 className={styles.name}>Catogory</h2>
            <p className={styles.borderbottom}>
              <i> </i>
            </p>
            {GridCategorydata.map((item) => {
              return (
                <GridCatogory
                  key={item.id}
                  icon={item.img}
                  name={item.name}
                  counter={item.counter}
                />
              );
            })}
          </div>
          <div className={styles.catogory}>
            <h2 className={styles.name}>Trending Now</h2>
            <p className={styles.borderbottom}>
              <i> </i>
            </p>
            {trendingdata.map((item) => {
              return (
                <>
                  <GridCatogory
                    key={item.id}
                    price={item.price}
                    img={item.img}
                    title={item.title}
                    star={item.star}
                  />
                  <p className={styles.borderbottom}></p>
                </>
              );
            })}
          </div>
          <div className={styles.catogory}>
            <h2 className={styles.name}>Gallery</h2>
            <p className={styles.borderbottom}>
              <i> </i>
            </p>
            <div className={styles.griddata}>
              {gridpicdata.map((item) => {
                return <GridCatogory key={item.id} img={item.pic} />;
              })}
            </div>
          </div>
          <div className={styles.catogory}>
            <h2 className={styles.name}>Popular Tags</h2>
            <p className={styles.borderbottom}>
              <i> </i>
            </p>
            {populartagdata.map((item) => {
              return (
                <GridCatogory
                  key={item.id}
                  tagicon={item.tagicon}
                  name={item.tag}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
