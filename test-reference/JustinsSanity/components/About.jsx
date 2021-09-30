import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HelveticaneueCondensedBoldWhite50px,
  Border1pxDoveGray,
  HelveticaneueRegularNormalDoveGray3,
  HelveticaneueCondensedBoldBlack80px,
  HelveticaneueBoldBlack35px,
} from "../styledMixins";
import "./test-reference/JustinsSanity/globals.css";

class About extends React.Component {
  render() {
    const {
      shop,
      batmanSuperman,
      line1,
      dealOfTheDay,
      search,
      about,
      place,
      shop2,
      sticklebricks,
      customerIcon,
      icons8ShoppingCart96,
      aboutUs,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="about screen">
          <OverlapGroup>
            <Shop>{shop}</Shop>
            <batmanSuperman src={batmanSuperman} />
            <Rectangle2></Rectangle2>
            <Rectangle3></Rectangle3>
            <Rectangle1></Rectangle1>
            <Line1 src={line1} />
            <DealOfTheDay>{dealOfTheDay}</DealOfTheDay>
            <Link to="/search-results">
              <Search>{search}</Search>
            </Link>
            <About1>{about}</About1>
            <Link to="/deal-of-day">
              <Place>{place}</Place>
            </Link>
            <Link to="/shop">
              <Shop1>{shop2}</Shop1>
            </Link>
            <Link to="/landing-page-2">
              <StickleBricks>{sticklebricks}</StickleBricks>
            </Link>
            <Link to="/account-login">
              <customerIcon src={customerIcon} />
            </Link>
            <Link to="/shopping-cart">
              <Icons8ShoppingCart96 src={icons8ShoppingCart96} />
            </Link>
            <AboutUs>{aboutUs}</AboutUs>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 2390px;
  height: 1080px;
  position: relative;
  margin-left: -460px;
`;

const Shop = styled.div`
  ${HelveticaneueRegularNormalDoveGray3}
  position: absolute;
  top: 68px;
  left: 506px;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
`;

const batmanSuperman = styled.img`
  position: absolute;
  width: 1514px;
  height: 1009px;
  top: 71px;
  left: 0;
  object-fit: cover;
`;

const Rectangle2 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 767px;
  height: 943px;
  top: 137px;
  left: 1613px;
  background-color: var(--raw-sienna);
`;

const Rectangle3 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 914px;
  height: 943px;
  top: 137px;
  left: 1330px;
  background-color: var(--white);
  border-radius: 15px;
  box-shadow: 0px 3px 6px #00000029;
`;

const Rectangle1 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1920px;
  height: 137px;
  top: 0;
  left: 460px;
  background-color: var(--alabaster);
`;

const Line1 = styled.img`
  position: absolute;
  width: 1938px;
  height: 23px;
  top: 125px;
  left: 452px;
  object-fit: cover;
`;

const DealOfTheDay = styled.div`
  ${HelveticaneueCondensedBoldWhite50px}
  position: absolute;
  top: 744px;
  left: 1420px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const Search = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 809px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;

const About1 = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 644px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
`;

const Place = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 1982px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;

const Shop1 = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 506px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;

const StickleBricks = styled.div`
  ${HelveticaneueCondensedBoldBlack80px}
  position: absolute;
  top: 36px;
  left: 1200px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
  cursor: pointer;
`;

const customerIcon = styled.img`
  position: absolute;
  width: 63px;
  height: 63px;
  top: 54px;
  left: 2153px;
  object-fit: cover;
  cursor: pointer;
`;

const Icons8ShoppingCart96 = styled.img`
  position: absolute;
  width: 73px;
  height: 73px;
  top: 49px;
  left: 2281px;
  object-fit: cover;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${HelveticaneueCondensedBoldBlack80px}
  position: absolute;
  top: 184px;
  left: 1645px;
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
`;

export default About;
