## snekTrakr
  ###Play Store 
  https://play.google.com/store/apps/details?id=com.ionicframework.snaketracker838115
  
  ###snekTrakr front end 
  https://github.com/jstafford1992/snekTrakr-front-end
  
snekTrakr is a hybrid-mobile application built for streamlining the access and updating records on a snake breeder/hobbyist's animals. It was built using the Ionic framework utilizing Angular 1 on the front end. The back-end is built with Node/Express/Postgres and is deployed on Heroku. The interface is designed and displayed in a card style system for ease of use. The app is available for free on the google play store for Android devices running 4.0.3 and up.
 
This is the repo for the server-side code and I have posted below all of the routes currently available. 
  
#/
  - login POST
  - signup POST

#/users
  - /users GET
  - /users/:id PUT
  - /users/:id DELETE

#/snakes  
  - / GET
  - / POST
  - /:id GET
  - /:id PUT
  - /:id DELETE

#/clutches
  - / GET 
  - /new POST
  - /:id GET
  - /:id PUT
  - /:id DELETE

#/breeding
  - / GET
  - / POST
  - /:id DELETE
  - /:id GET 
  
#/feeding
 - / POST
 - /:id GET
 - /:id DELETE

#/shed
 - / POST
 - /:id GET
 - /:id DELETE

#/weight
 - / POST
 - /:id GET
 - /:id DELETE
