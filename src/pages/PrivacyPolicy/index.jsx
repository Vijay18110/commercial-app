import React from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import Container_2 from "../../ui/Container/Contner_2";
import SectionTitle from "../../shared/SectionTitle";
import MiniSectionTitle from "../../shared/SectionTitle/MiniSectionTitle";
import List from "../../shared/OrderList";
import Item from "../../shared/OrderList/Item";
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data9A,
  data10A,
  romanData1,
  dataC,
  datade,
  romanData2,
  data6,
  data11,
  data7,
  data8,
  data9,
  data10,
  data011,
  data12,
  data012,
  data013,
  data014,
  data015,
  data017,
  data016,
  data018,
  data019,
} from "../../data/PrivacyPolicy";
import InputField from "../../shared/InputField";
import MiniCategory from "../../components/MiniCategory";
import TrandingNow from "../../components/TrendingNow";
import Poster from "../../components/Poster";

const PrivacyPolicy = () => {
  return (
    <>
      <Container>
        <Container_2>
          <div className={styles.left}>
            <div className={styles.paddingleft}>
              <div className={styles.singleTitle}>
                <SectionTitle title="Privacy Policy" />
                <MiniSectionTitle title="Welcome to AliThemes’s Privacy Policy" />
                <div className={styles.listed}>
                  <List start={1}>
                    {data1.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                {/* list 4 to 5 */}
                <MiniSectionTitle title="The type of personal information we collect" />
                <div className={styles.listed}>
                  <List start={4}>
                    {data2.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                {/* list 6 to 8 */}
                <MiniSectionTitle title="How we collect personal information" />
                <div className={styles.listed}>
                  <List start={6}>
                    {data3.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                {/* list 9  */}
                <MiniSectionTitle title="Personal information we collect about you from others" />
                <div className={styles.listed}>
                  <List start={9}>
                    {data4.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                    <div className={styles.nestedListesd}>
                      <List type="a">
                        {data9A.map((it) => {
                          return <Item key={it.id} name={it.item} />;
                        })}
                      </List>
                    </div>
                  </List>
                </div>
                {/* list 10  */}
              </div>
              <MiniSectionTitle title="How we use personal information" />
              <div className={styles.listed}>
                {/* nested list  1 */}

                <List start={10}>
                  {data5.map((it) => {
                    return <Item key={it.id} name={it.item} />;
                  })}
                  {/* nested list  2 */}
                  <div className={styles.nestedListesd}>
                    <List type="a">
                      {data10A.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                      {/* nested list  3 */}

                      <div className={styles.nestedListesd}>
                        <List type="i">
                          {romanData1.map((it) => {
                            return <Item key={it.id} name={it.item} />;
                          })}
                        </List>
                      </div>
                      {dataC.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                      <div className={styles.nestedListesd}>
                        <List type="i">
                          {romanData2.map((it) => {
                            return <Item key={it.id} name={it.item} />;
                          })}
                        </List>
                      </div>
                      {datade.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                </List>
                <MiniSectionTitle title="When we disclose your personal information" />
                <div className={styles.listed}>
                  <List start={11}>
                    {data6.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                    <div className={styles.nestedListesd}>
                      <List type="a">
                        {data11.map((it) => {
                          return <Item key={it.id} name={it.item} />;
                        })}
                      </List>
                    </div>
                  </List>
                </div>
                <MiniSectionTitle title="Where we transfer and/or store your personal information" />
                <div className={styles.listed}>
                  <List start={12}>
                    {data7.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                <MiniSectionTitle title="How we keep your personal information secure" />
                <div className={styles.listed}>
                  <List start={13}>
                    {data8.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                <MiniSectionTitle title="How you can access your personal information" />
                <div className={styles.listed}>
                  <List start={14}>
                    {data9.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                <MiniSectionTitle title="Marketing Choices regarding your personal information" />
                <div className={styles.listed}>
                  <List start={15}>
                    {data10.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                  </List>
                </div>
                <MiniSectionTitle title="Cookies (not the type you eat!) and web analytics" />
                <div className={styles.listed}>
                  <List start={17}>
                    {data011.map((it) => {
                      return <Item key={it.id} name={it.item} />;
                    })}
                    <div className={styles.nestedListesd}>
                      <List type="a">
                        {data12.map((it) => {
                          return <Item key={it.id} name={it.item} />;
                        })}
                      </List>
                    </div>
                  </List>
                  <div className={styles.listed}>
                    <List start={19}>
                      {data012.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="Information about children" />
                  <div className={styles.listed}>
                    <List start={20}>
                      {data013.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="Information you make public or give to others" />
                  <div className={styles.listed}>
                    <List start={21}>
                      {data014.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="How long we keep your personal information" />
                  <div className={styles.listed}>
                    <List start={22}>
                      {data015.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="When we need to update this policy" />
                  <div className={styles.listed}>
                    <List start={23}>
                      {data016.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="How you can contact us" />
                  <div className={styles.listed}>
                    <List start={25}>
                      {data017.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="If you’re a user or visitor in the European Economic Area these rights also apply to you:" />
                  <div className={styles.listed}>
                    <List start={1}>
                      {data018.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                  <MiniSectionTitle title="How you can access your personal information" />
                  <div className={styles.listed}>
                    <List start={1}>
                      {data019.map((it) => {
                        return <Item key={it.id} name={it.item} />;
                      })}
                    </List>
                  </div>
                </div>
              </div>
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

export default PrivacyPolicy;
