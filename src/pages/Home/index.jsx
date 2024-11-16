import React from "react";
import Container from "../../ui/Container";
import Banner from "../../components/Banner";
import banner1 from "../../assets/Banner/img1.png";
import banner2 from "../../assets/Banner/img2.png";
import FeatureCategories from "../../components/FeatureCategories";
import MultiCarousel from "../../shared/Carousel";
import SubBanner from "../../components/SubBanner";
import PopularProducts from "../../components/PopularProducts";
import DailyBS from "../../components/DailyBS";
import DealsOfTheYear from "../../components/DealsOfTheYear";
import HotProducts from "../../components/HotProducts";
import { products } from "../../data/Hotp.js";
import Modal from "../../Modal/index.jsx";
import Mainportal from "../../Modal/mainportal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui.js";

const bannerData = [
  {
    id: 1,
    title1: "Don’t miss amazing",
    title2: "grocery deals",
    desc: "Sign up for the daily newsletter",
    img: banner1,
  },
  {
    id: 2,
    title1: "Fresh Vegetables",
    title2: "Big discount",
    desc: "Save up to 50% off on your first order",
    img: banner2,
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.modalOpen);
  const onClose = () => {
    dispatch(uiActions.onModalOpen());
  };

  return (
    <>
      {isModalOpen && (
        <Mainportal onClose={onClose}>
          <Modal onClose={onClose} />
        </Mainportal>
      )}
      <Container>
        <MultiCarousel arrows={false} infinite={true} showDots={true} autoPlay={true} responsive={responsive}>
          {bannerData.map((it) => {
            return <Banner key={it.id} it={it} module="banner" />;
          })}
        </MultiCarousel>
        <FeatureCategories />
        <SubBanner />
        <PopularProducts />
        <DailyBS />
        <DealsOfTheYear />
        <HotProducts productsdata={products} />
      </Container>
    </>
  );
};
export default Home;
