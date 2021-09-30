import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HelveticaneueCondensedBoldWhite50px,
  Border1pxDoveGray,
  HelveticaneueBoldCodGray52px,
  HelveticaneueRegularNormalDoveGray3,
  HelveticaneueCondensedBoldBlack80px,
  HelveticaneueBoldBlack35px,
} from "../styledMixins";
import "./test-reference/JustinsSanity/globals.css";

class LandingPage2 extends React.Component {
  render() {
    const {
      shop,
      markusSpiske3Dw6Ie9X3Q0Unsplash,
      line1,
      dealOfTheDay,
      search,
      about,
      place,
      shop2,
      sticklebricks,
      customerIcon,
      icons8ShoppingCart96,
      spanText,
      spanText2,
      spanText3,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page-2 screen">
          <OverlapGroup>
            <Shop>{shop}</Shop>
            <MarkusSpiske3dw6ie9x3Q0Unsplash src={markusSpiske3Dw6Ie9X3Q0Unsplash} />
            <Rectangle2></Rectangle2>
            <Rectangle3></Rectangle3>
            <Rectangle1></Rectangle1>
            <Link to="/deal-of-day">
              <Rectangle4></Rectangle4>
            </Link>
            <Line1 src={line1} />
            <DealOfTheDay>{dealOfTheDay}</DealOfTheDay>
            <Link to="/search-results">
              <Search>{search}</Search>
            </Link>
            <Link to="/about">
              <About>{about}</About>
            </Link>
            <Link to="/deal-of-day">
              <Place>{place}</Place>
            </Link>
            <Link to="/shop">
              <Shop1>{shop2}</Shop1>
            </Link>
            <StickleBricks>{sticklebricks}</StickleBricks>
            <Link to="/account-login">
              <customerIcon src={customerIcon} />
            </Link>
            <Link to="/shopping-cart">
              <Icons8ShoppingCart96 src={icons8ShoppingCart96} />
            </Link>
            <Text2>
              <span className="helveticaneue-condensed-bold-cod-gray-52px">{spanText}</span>
              <span className="helveticaneue-condensed-bold-cod-gray-31px">{spanText2}</span>
              <span className="helveticaneue-condensed-bold-cod-gray-52px">{spanText3}</span>
            </Text2>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 1938px;
  height: 1866px;
  position: relative;
  margin-left: -8px;
`;

const Shop = styled.div`
  ${HelveticaneueRegularNormalDoveGray3}
  position: absolute;
  top: 68px;
  left: 54px;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
`;

const MarkusSpiske3dw6ie9x3Q0Unsplash = styled.img`
  position: absolute;
  width: 1153px;
  height: 1729px;
  top: 137px;
  left: 8px;
  object-fit: cover;
`;

const Rectangle2 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 767px;
  height: 943px;
  top: 137px;
  left: 1162px;
  background-color: var(--raw-sienna);
`;

const Rectangle3 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 973px;
  height: 749px;
  top: 137px;
  left: 878px;
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
  left: 8px;
  background-color: var(--alabaster);
`;

const Rectangle4 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 411px;
  height: 160px;
  top: 688px;
  left: 914px;
  background-color: var(--raw-sienna);
  border-radius: 35px;
  cursor: pointer;
`;

const Line1 = styled.img`
  position: absolute;
  width: 1938px;
  height: 23px;
  top: 125px;
  left: 0;
  object-fit: cover;
`;

const DealOfTheDay = styled.div`
  ${HelveticaneueCondensedBoldWhite50px}
  position: absolute;
  top: 744px;
  left: 968px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const Search = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 358px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;

const About = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 192px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;

const Place = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 1530px;
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
  left: 54px;
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
  left: 748px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 80px;
  white-space: nowrap;
`;

const customerIcon = styled.img`
  position: absolute;
  width: 63px;
  height: 63px;
  top: 54px;
  left: 1702px;
  object-fit: cover;
  cursor: pointer;
`;

const Icons8ShoppingCart96 = styled.img`
  position: absolute;
  width: 73px;
  height: 73px;
  top: 49px;
  left: 1830px;
  object-fit: cover;
  cursor: pointer;
`;

const Text2 = styled.div`
  ${HelveticaneueBoldCodGray52px}
  position: absolute;
  width: 894px;
  top: 255px;
  left: 932px;
  text-align: center;
  letter-spacing: 0;
  line-height: 52px;
`;

export default LandingPage2;
