## snekTrakr
  Play Store https://play.google.com/store/apps/details?id=com.ionicframework.snaketracker838115
  
  snekTrakr front end https://github.com/jstafford1992/snekTrakr-front-end
  
  snekTrakr is built with hobbyist snake breeders in mind to aid in keeping track of individual snakes information in collection sizes from large to small. The application is available on the Google Play Store for free. It keeps track of each snakes: name, feedings, shed, weight, breeding pairings, and clutches. snekTrakr was built using the Ionic Framework for the application in the google store and the server is built using Node, Express, and a PostegreSQL database. The server is deployed to Heroku. This is the repo for the server-side code and I have posted below all of the routes currently available. 
  
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
