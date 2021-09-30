
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SearchResults from "./components/SearchResults";
import DealOfDay from "./components/DealOfDay";
import About from "./components/About";
import Shop from "./components/Shop";
import LandingPage2 from "./components/LandingPage2";
import AccountLogin from "./components/AccountLogin";
import ShoppingCart from "./components/ShoppingCart";
import Admin from "./components/Admin";
import './global.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|landing-page)">
            <LandingPage {...landingPageData} />
          </Route>
          <Route path="/search-results">
            <SearchResults />
          </Route>
          <Route path="/deal-of-day">
            <DealOfDay {...dealOfDayData} />
          </Route>
          <Route path="/about">
            <About {...aboutData} />
          </Route>
          <Route path="/shop">
            <Shop {...shopData} />
          </Route>
          <Route path="/landing-page-2">
            <LandingPage2 {...landingPage2Data} />
          </Route>
          <Route path="/account-login">
            <AccountLogin {...accountLoginData} />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart {...shoppingCartData} />
          </Route>
          <Route path="/admin">
            <Admin {...adminData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const landingPageData = {
    shop: "Shop",
    vladHilitanu1Fi2QaypaYUnsplash: "/img/vlad-hilitanu-1fi2qaypa-y-unsplash@1x.png",
    dealOfTheDay: "Deal of the Day",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    line1: "/img/line-1-1@1x.png",
    spanText: <>Welcome to StickleBrick’s! <br />We strive to offer all fans of LEGO</>,
    spanText2: "©",
    spanText3: <>, <br />both young and old, <br />a quality place to find all the greatest sets, <br />minifigs, and even the last piece<br />needed to finish your MOC!</>,
    icons8Search100: "/img/icons8-search-100@1x.png",
};

const dealOfDayData = {
    omarFloresLqt_BowtyseUnsplash: "/img/omar-flores-lqt-bowtyse-unsplash-1@1x.png",
    shop: "Shop",
    dealOfTheDay: "Deal of the Day",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    line1: "/img/line-1-1@1x.png",
};

const aboutData = {
    shop: "Shop",
    batmanSuperman: "/img/batmanSuperman.png",
    line1: "/img/line-1-1@1x.png",
    dealOfTheDay: "Deal of the Day",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    aboutUs: "About Us",
};

const shopData = {
    omarFloresLqt_BowtyseUnsplash: "/img/omar-flores-lqt-bowtyse-unsplash-1@1x.png",
    shop: "Shop",
    dealOfTheDay: "Deal of the Day",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    line1: "/img/line-1-1@1x.png",
};

const landingPage2Data = {
    shop: "Shop",
    markusSpiske3Dw6Ie9X3Q0Unsplash: "/img/markus-spiske-3dw6ie9x3q0-unsplash@1x.png",
    line1: "/img/line-1-1@1x.png",
    dealOfTheDay: "Deal of the Day",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    spanText: <>Welcome to StickleBrick’s! <br />We strive to offer all fans of LEGO</>,
    spanText2: "©",
    spanText3: <>, <br />both young and old, <br />a quality place to find all the greatest sets, <br />minifigs, and even the last piece<br />needed to finish your MOC!</>,
};

const accountLoginData = {
    shop: "Shop",
    xaviCabreraKnUmdzqdjmUnsplash: "/img/xavi-cabrera-kn-umdzqdjm-unsplash-1@1x.png",
    login: "Login",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    line1: "/img/line-1-1@1x.png",
    customerLogin: "Customer Login",
    username: "Username",
    password: "Password",
    adminLogin: "Admin Login",
};

const shoppingCartData = {
    nathanDumlaoTmu6Dl6La9KUnsplash: "/img/nathan-dumlao-tmu6dl6la9k-unsplash@1x.png",
    shop: "Shop",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    line1: "/img/line-1-1@1x.png",
};

const adminData = {
    shop: "Shop",
    xaviCabreraKnUmdzqdjmUnsplash: "/img/xavi-cabrera-kn-umdzqdjm-unsplash-1@1x.png",
    login: "Login",
    search: "Search",
    about: "About",
    place: "Sale",
    shop2: "Shop",
    sticklebricks: "StickleBrick’s",
    icons8Customer1001: "/img/icons8-customer-100--1--1@1x.png",
    icons8ShoppingCart96: "/img/icons8-shopping-cart-96-1@1x.png",
    line1: "/img/line-1-1@1x.png",
    adminLogin: "Admin Login",
    username: "Username",
    password: "Password",
};

