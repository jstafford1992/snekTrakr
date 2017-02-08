## snekTrakr

### Play Store 
  https://play.google.com/store/apps/details?id=com.ionicframework.snaketracker838115
  
### snekTrakr front end 
  https://github.com/jstafford1992/snekTrakr-front-end
  
snekTrakr is a hybrid-mobile application built for streamlining the access and updating records on a snake breeder/hobbyist's animals. It was built using the Ionic framework utilizing Angular 1 on the front end. The back-end is built with Node/Express/Postgres and is deployed on Heroku. The interface is designed and displayed in a card style system for ease of use. The app is available for free on the google play store for Android devices running 4.0.3 and up.
 
This is the repo for the server-side code and I have posted below all of the routes currently available. 
  
#/
  - /login POST
  - /signup POST

#/users
  - /users/:id PUT
  - /users/:id DELETE

#/snakes  
  - /snakes GET
  - /snakes POST
  - /snakes/:id GET
  - /snakes/:id PUT
  - /snakes/:id DELETE

#/clutches
  - /clutches GET 
  - /clutches/new POST
  - /clutches/:id GET
  - /clutches/:id PUT
  - /clutches/:id DELETE

#/breeding
  - /breeding GET
  - /breeding POST
  - /breeding/:id DELETE
  - /breeding/:id GET 
  
#/feeding
 - /feeding POST
 - /feeding/:id GET
 - /feeding/:id DELETE

#/shed
 - /shed POST
 - /shed/:id GET
 - /shed/:id DELETE

#/weight
 - /weight POST
 - /weight/:id GET
 - /weight/:id DELETE
