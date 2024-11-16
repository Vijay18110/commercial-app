import React from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import Container_2 from "../../ui/Container/Contner_2";
import SectionTitle from "../../shared/SectionTitle";
import {
  termsD1,
  termsD2,
  termsD3,
  termsD4,
  termsD5,
  termsD6,
  termsD7,
} from "../../data/TermsAndConditon";
import Item from "../../shared/OrderList/Item";
import InputField from "../../shared/InputField";
import MiniCategory from "../../components/MiniCategory";
import TrandingNow from "../../components/TrendingNow";
import Poster from "../../components/Poster";
import MiniSectionTitle from "../../shared/SectionTitle/MiniSectionTitle";
import List from "../../shared/OrderList";

const TermsAndConditions = () => {
  return (
    <>
      <Container>
        <Container_2>
          <div className={styles.left}>
            <div className={styles.paddingleft}>
              <div className={styles.singleTitle}>
                <SectionTitle title="Terms of Service" />
              </div>
              <ul type="a">
                {termsD1.map((it) => {
                  return <Item key={it.id} name={it.item} />;
                })}
              </ul>
              <MiniSectionTitle title="Rights & restrictions" />
              <div className={styles.listed}>
                <List>
                  {termsD2.map((it) => {
                    return <Item key={it.id} name={it.item} />;
                  })}
                </List>
              </div>
              <MiniSectionTitle title="Links To Other Web Sites" />
              <ul>
                {termsD3.map((it) => {
                  return <Item key={it.id} name={it.item} />;
                })}
              </ul>
              <MiniSectionTitle title="Termination" />
              <ul>
                {termsD4.map((it) => {
                  return <Item key={it.id} name={it.item} />;
                })}
              </ul>
              <MiniSectionTitle title="Governing Law" />
              <ul>
                {termsD5.map((it) => {
                  return <Item key={it.id} name={it.item} />;
                })}
              </ul>
              <MiniSectionTitle title="Changes" />
              <ul>
                {termsD6.map((it) => {
                  return <Item key={it.id} name={it.item} />;
                })}
              </ul>
              <MiniSectionTitle title="Contact Us" />
              <ul>
                {termsD7.map((it) => {
                  return <Item key={it.id} name={it.item} />;
                })}
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.Input}>
              <InputField />
            </div>
            <MiniCategory />
            <TrandingNow />
            <Poster />
          </div>
        </Container_2>
      </Container>
    </>
  );
};

export default TermsAndConditions;
