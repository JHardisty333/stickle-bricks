import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HelveticaneueRegularNormalDoveGray3,
  HelveticaneueCondensedBoldBlack80px,
  Border1pxDoveGray,
  HelveticaneueBoldBlack35px,
} from "../styledMixins";
import "./test-reference/JustinsSanity/globals.css";

class ShoppingCart extends React.Component {
  render() {
    const {
      nathanDumlaoTmu6Dl6La9KUnsplash,
      shop,
      search,
      about,
      place,
      shop2,
      sticklebricks,
      customerIcon,
      icons8ShoppingCart96,
      line1,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="shopping-cart screen">
          <OverlapGroup>
            <NathanDumlaoTMU6dl6La9kUnsplash src={nathanDumlaoTmu6Dl6La9KUnsplash} />
            <Shop>{shop}</Shop>
            <Rectangle2></Rectangle2>
            <Rectangle3></Rectangle3>
            <Rectangle1></Rectangle1>
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
            <Link to="/landing-page">
              <StickleBricks>{sticklebricks}</StickleBricks>
            </Link>
            <Link to="/account-login">
              <customerIcon src={customerIcon} />
            </Link>
            <Icons8ShoppingCart96 src={icons8ShoppingCart96} />
            <Line1 src={line1} />
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 1938px;
  height: 1473px;
  position: relative;
  margin-left: -8px;
`;

const NathanDumlaoTMU6dl6La9kUnsplash = styled.img`
  position: absolute;
  width: 899px;
  height: 1349px;
  top: 124px;
  left: 8px;
  object-fit: cover;
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

const Rectangle2 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 1091px;
  height: 1360px;
  top: 113px;
  left: 838px;
  background-color: #222a2d;
`;

const Rectangle3 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 973px;
  height: 1218px;
  top: 106px;
  left: 792px;
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
  cursor: pointer;
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
`;

const Line1 = styled.img`
  position: absolute;
  width: 1938px;
  height: 23px;
  top: 125px;
  left: 0;
  object-fit: cover;
`;

export default ShoppingCart;
