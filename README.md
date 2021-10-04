

# Project 3 - StickleBricks
> Kelley Worthington, Jessica Hardisty, Ryan Jepson and Justin Berg
---
### Table of Contents
- [Description](#description)
- [Introduction](#introduction)
- [Challenges](#challenges)
- [Victories](#victories)
- [Resources](#resources)
- [Technology](#technology)

---

## Description

> Full-Stack application using the MERN stack

## Introduction 
For our final project of creating a full-stack application from the gorund up, we chose to take on an e-commerce application. We had a member of our group who had a family member with an online store and it was very outdated. We chose to take the api she uses with her store and pull the data and create a mock-up of a potential new site for her to use one day. The site is complied of individual lego pieces for sell, and is called StickleBricks!

Our site features:

- Login / Signup
- Shop page to view all the items in the store
- Search with the ability to perform a raw search or search by     given parameters within Category, Color, or Part Type
- When you're viewing the items you are able to click on an item to view it larger and from there the ability to change the quantity and the ability to Add to Cart
- Once you're in the cart you're able to remove items you dont want.

Given more time to be able to perfect this app the way we wanted to we have quite a few more features we wanted to implement. 

- Admin Login with functionality specific to the admin only
- Account page to be able to view account info and change account information.
- Checkout / Create Order to be able to actually process these orders. Given the api that we were using, it did restrict us with the payment method. It did require all payments to be processed through actual BrickLink (the api being used.)


---

## Challenges

The amount of data that we pulled from the actual BrickLink Api was MASSIVE. So massive that it often broke our editors when trying to format it. Finally we were able to get the API formatted in json, we then created a function to pull the information we wanted out of it and into a new json file to save our sanity with the amount of data.

We also decided to used different technology than we had used together in class, that posed a huge learning curve to do a lot of researching and a lot of trial and error. 

React was a very new technology for all of us in the group and being able to try and get a firmer grasp on that technology while creating this site on a time crunch was definitley a stress.

There were a couple of instances where we all were pushing our code at the same time and we had some very weird merge conflict issues.

It felt like every time we got something set up and working there was another bug, and another bug, and so on. Lots of debugging.

We had a lot of initial ideas for where we wanted this project to go and all the features we really had hoped to include, and as we got really into the depth of things, we all realized we really were bitting off a huge chunk and that we might need to scale things down a little bit and re-evaluate the amount of time we did have left and the reality of being able to complete all the things. 

In the end, despite the challenge after challenge we ran into with this assignment we all really worked so closely as a group that we helped each other out non-stop.


---
## Victories

With as many challenges as we had, we had that many victories AT LEAST. 

- We started off strong with a solid concept, we had gorgeous wireframes, and a lot of excitment as a group to get going. 

- The backend was put together rather quickly with the basis of what was going to be needed. We definitely had a lot more to add to things as it as going on, we had the skeleton set up quickly

- With the backend, one of the biggest initial victories we had was being able to get the massive data file we pulled formatted correctly, and then from that file to be able to pull all the information we needed out of it and write our own json file to house our data. It was a huge feet and so many lines of code. Literally never ending. 

- Getting the front end set up was a massive victory for us. The ability to actually see the back end data being shown on the front end really made everything come full circle. Our frontend worked so hard to get things off the ground. And it was a huge undertaking trying to understand the complexities of React and implement them under intense pressure. 

- I think overall our biggest victory was how well we all gelled as a group. We would often times have a zoom meeting going for upwards of 8 hours a time and people would come and go as needed but we were all working so closely with each other it made this experience so much less stressful that it could have been if it were a group who didnt care and didnt work well together.


---
## Technology

- Server Side
    - Mongoose
    - Express
    - JWT
    - Axios
    - Bcrypt
    - Nodemailer
    - Oauth-1.0a

- Front End
    - React
    - Reactstrap
    - React-Router-Dom
    - Bootstrap
    - React-Confirm-Alert

- Full-Stack
    - Concurrently
    - dotenv


---
## Resources 

- Ryan Jepson

<a href="">Deployed Heroku</a>

<a href="https://github.com/JHardisty333/stickle-bricks">GitHub Repo</a>



