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

class LandingPage extends React.Component {
  render() {
    const {
      shop,
      vladHilitanu1Fi2QaypaYUnsplash,
      dealOfTheDay,
      about,
      place,
      shop2,
      sticklebricks,
      customerIcon,
      icons8ShoppingCart96,
      line1,
      spanText,
      spanText2,
      spanText3,
      icons8Search100,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="landing-page screen">
          <OverlapGroup1>
            <OverlapGroup>
              <Shop>{shop}</Shop>
              <Rectangle2></Rectangle2>
              <VladHilitanu1FI2QAYPaYUnsplash src={vladHilitanu1Fi2QaypaYUnsplash} />
              <Rectangle3></Rectangle3>
              <Rectangle1></Rectangle1>
              <Link to="/deal-of-day">
                <Rectangle4></Rectangle4>
              </Link>
              <DealOfTheDay>{dealOfTheDay}</DealOfTheDay>
              <Link to="/about">
                <About>{about}</About>
              </Link>
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
              <Line1 src={line1} />
              <Text1>
                <span className="helveticaneue-condensed-bold-cod-gray-52px">{spanText}</span>
                <span className="helveticaneue-condensed-bold-cod-gray-31px">{spanText2}</span>
                <span className="helveticaneue-condensed-bold-cod-gray-52px">{spanText3}</span>
              </Text1>
            </OverlapGroup>
            <Link to="/search-results">
              <Icons8Search100 src={icons8Search100} />
            </Link>
          </OverlapGroup1>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  width: 2094px;
  height: 1080px;
  position: relative;
  margin-left: -173px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 2102px;
  height: 1080px;
  top: 0;
  left: 0;
`;

const Shop = styled.div`
  ${HelveticaneueRegularNormalDoveGray3}
  position: absolute;
  top: 68px;
  left: 219px;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
`;

const Rectangle2 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 767px;
  height: 943px;
  top: 137px;
  left: 1326px;
  background-color: var(--pacific-blue);
`;

const VladHilitanu1FI2QAYPaYUnsplash = styled.img`
  position: absolute;
  width: 1415px;
  height: 943px;
  top: 137px;
  left: 0;
  border-radius: 43px;
  object-fit: cover;
`;

const Rectangle3 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 973px;
  height: 749px;
  top: 137px;
  left: 1043px;
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
  left: 173px;
  background-color: var(--alabaster);
`;

const Rectangle4 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 411px;
  height: 160px;
  top: 688px;
  left: 1079px;
  background-color: var(--pacific-blue);
  border-radius: 35px;
  cursor: pointer;
`;

const DealOfTheDay = styled.div`
  ${HelveticaneueCondensedBoldWhite50px}
  position: absolute;
  top: 744px;
  left: 1133px;
  letter-spacing: 0;
  line-height: 50px;
  white-space: nowrap;
`;

const About = styled.div`
  ${HelveticaneueBoldBlack35px}
  position: absolute;
  top: 68px;
  left: 357px;
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
  left: 1695px;
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
  left: 219px;
  text-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0;
  line-height: 35px;
  white-space: nowrap;
  cursor: pointer;
`;

const StickleBricks = styled.h1`
  ${HelveticaneueCondensedBoldBlack80px}
  position: absolute;
  top: 36px;
  left: 913px;
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
  left: 1866px;
  object-fit: cover;
  cursor: pointer;
`;

const Icons8ShoppingCart96 = styled.img`
  position: absolute;
  width: 73px;
  height: 73px;
  top: 49px;
  left: 1994px;
  object-fit: cover;
  cursor: pointer;
`;

const Line1 = styled.img`
  position: absolute;
  width: 1938px;
  height: 23px;
  top: 125px;
  left: 164px;
  object-fit: cover;
`;

const Text1 = styled.div`
  ${HelveticaneueBoldCodGray52px}
  position: absolute;
  width: 894px;
  top: 255px;
  left: 1097px;
  text-align: center;
  letter-spacing: 0;
  line-height: 52px;
`;

const Icons8Search100 = styled.img`
  position: absolute;
  width: 82px;
  height: 82px;
  top: 51px;
  left: 485px;
  object-fit: cover;
  cursor: pointer;
`;

export default LandingPage;
