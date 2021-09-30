import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HelveticaneueCondensedBoldWhite50px,
  HelveticaneueLightitalicLightBlack3,
  Border1pxDoveGray,
  HelveticaneueRegularNormalDoveGray3,
  HelveticaneueBoldBlack60px,
  HelveticaneueCondensedBoldBlack80px,
  HelveticaneueBoldBlack35px,
} from "../styledMixins";
import "./test-reference/JustinsSanity/globals.css";

class Admin extends React.Component {
  render() {
    const {
      shop,
      xaviCabreraKnUmdzqdjmUnsplash,
      login,
      search,
      about,
      place,
      shop2,
      sticklebricks,
      customerIcon,
      icons8ShoppingCart96,
      line1,
      adminLogin,
      username,
      password,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="admin screen">
          <OverlapGroup>
            <Shop>{shop}</Shop>
            <XaviCabreraKnUmDZQDjMUnsplash src={xaviCabreraKnUmdzqdjmUnsplash} />
            <Rectangle2></Rectangle2>
            <Rectangle21></Rectangle21>
            <Rectangle3></Rectangle3>
            <Rectangle1></Rectangle1>
            <Rectangle4></Rectangle4>
            <Login>{login}</Login>
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
            <Rectangle5></Rectangle5>
            <Rectangle6></Rectangle6>
            <AdminLogin>{adminLogin}</AdminLogin>
            <Username>{username}</Username>
            <Password>{password}</Password>
          </OverlapGroup>
        </div>
      </div>
    );
  }
}

const OverlapGroup = styled.div`
  width: 1938px;
  height: 1126px;
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

const XaviCabreraKnUmDZQDjMUnsplash = styled.img`
  position: absolute;
  width: 1488px;
  height: 992px;
  top: 134px;
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
  background-color: var(--denim);
`;

const Rectangle21 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 615px;
  height: 967px;
  top: 113px;
  left: 930px;
  background-color: var(--confetti);
`;

const Rectangle3 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 973px;
  height: 749px;
  top: 234px;
  left: 482px;
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
  height: 132px;
  top: 702px;
  left: 748px;
  background-color: var(--alizarin-crimson);
  border-radius: 35px;
`;

const Login = styled.div`
  ${HelveticaneueCondensedBoldWhite50px}
  position: absolute;
  top: 744px;
  left: 900px;
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

const Rectangle5 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 411px;
  height: 78px;
  top: 438px;
  left: 748px;
  background-color: var(--mystic);
  border-radius: 35px;
`;

const Rectangle6 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 411px;
  height: 78px;
  top: 570px;
  left: 750px;
  background-color: var(--mystic);
  border-radius: 35px;
`;

const AdminLogin = styled.div`
  ${HelveticaneueBoldBlack60px}
  position: absolute;
  top: 310px;
  left: 774px;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const Username = styled.div`
  ${HelveticaneueLightitalicLightBlack3}
  position: absolute;
  top: 459px;
  left: 798px;
  opacity: 0.18;
  text-align: center;
  letter-spacing: 0;
  line-height: 37px;
  white-space: nowrap;
`;

const Password = styled.div`
  ${HelveticaneueLightitalicLightBlack3}
  position: absolute;
  top: 591px;
  left: 802px;
  opacity: 0.18;
  text-align: center;
  letter-spacing: 0;
  line-height: 37px;
  white-space: nowrap;
`;

export default Admin;
