# Bad Buck
![responsive Project](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/responsive-dev-for-readme.png?raw=true "Responsive Image of application")

[Live Site](https://shaun-finnegan.github.io/Shaun-Finnegam-Milestone-project-2/)

Welcome to Bad Buck! Bad Buck is a top down 2d game created with HTML, CSS and Javascript. The game consist of a home page providing the user with instructions on how to play the game as well as three levels, with each level increasing in difficulty. The game allows the user to move the rabbit around the main game area avoiding moving enemies and boundries which will hinder the rabbits progress if a collision takes place. The aim of each level is to get the rabbit to collect 20 carrots that appear at different locations within the game area whilst avoiding any contact with enemies or hitting boundries.

## Table of Contents

* [Project Goals](#project-goals)
* [User Experience](#user-experience)
* [User Stories](#user-stories)
* [Wireframes](#wireframes)
* [Colour Scheme](#colour-scheme)
* [Structure](#structue)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [A note about semantic HTML](#a-note-about-semantic-html)
* [Test Driven Development (TDD)](#test-driven-development)
* [Behaviour Driven Development (BDD)](#behaviour-driven-development)
* [Bugs](#bugs)
* [Wish List](#wish-list)
* [Deployment](#deployment)
* [Credits](#credits)

## Project Goals
### User Goals
* To Have a fun and enjoyable experience whilst using the application
* To be able to play the game on any device they choose
* To be challenged by the game
* To be given clear instructions on how they are to play the game

### Site Owner Goals
* To provide the user with a fun and enjoyable experience
* To allow the user to access and use the application on any device
* To give users a positive experience so that they are encouraged to return to the website
* To make it clear to the user in regards to how they should interact with the website

## User Experience
### Target Audience
* People who enjoy playing Games Online
* Animal Lovers
* Prospective employers

### Requirements and expectations
* A fully functioning and responsive web application
* Clear and easy to understand instructions in regards to playing the game
* An asthetically pleasing web application
* To provide and enjoyable and engaging experience

## User Stories

### First Time User

* Should be able to understand where to find the instructions on how to play the game
* Should be able to arrive on the website and immeditley understand what to do
* Should Be able to read the instructions and be clear on how to play the game
* Should be able to play the game on any device they choose
* Should have an interactive and enjoyable experience

### Returning Users

* Should be able to resume there game play without any difficulties
* Should expect that any updates or changes to game play are clearly defined before they begin to play
* Should still have an interactive and enjoyable experience

### Site Owner

* Wants the user to know how to naviagate through the application easily
* Wants the user to feel at ease with using the site and to ensure that there are no steep learning curves 
* Wants the site to be accessible to anyone who wishes to use it
* Wants prospective employers to be impressed with the level of interactivity that the application provides
* Wants users to leave the site feeling that they have had a positive experience

## Wireframes

The wireframes below Where created at the beginnig of this project with a mobile first approach in mind. The aim was to keep the design as simple as possible so as not to take away from the experience that the game itself would provide. These wire frames where created with a software called [JustInMind](https://www.justinmind.com/)

### Home Page
* [Mobile](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/home-page-mobile.png?raw=true)
* [Tablet](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/home-page-tablet.png?raw=true)
* [Desktop](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/home-page-desktop.png?raw=true)

### Game Screen
* [Mobile](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/home-page-mobile.png?raw=true)
* [Tablet](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-play-tablet.png?raw=true)
* [Desktop](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-play-desktop.png?raw=true)

### You Win Screen
* [Mobile](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/you-win-mobile.png?raw=true)
* [Tablet](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/you-win-tablet.png?raw=true)
* [Desktop](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/you-win-desktop.png?raw=true)

### Game Over Screen
* [Mobile](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-over-mobile.png?raw=true)
* [Tablet](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-over-tablet.png?raw=true)
* [Desktop](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-over-desktop.png?raw=true)


## Colour Scheme
The colour scheme I have choosen for this website is losely based on [this](https://www.schemecolor.com/wp-content/themes/colorsite/include/cc5.php?color0=92cd28&color1=b6ee56&color2=e4ff7f&color3=ffa33f&color4=f78914&pn=Orange%20&%20Green) I wanted to keep the colour scheme simple and related to the subject of the game. As the goal of the game is for the rabbit to catch a carrott I felt it appropriate to use orange and green as the main color scheme for the website.

## Structue
The structure of the website was kept as simple as possible as the main focus of the site was the user experience during the game play.
The site has a home page which contains two section, the first being the instructions on how to play the game and the second allowing the user to start the gamw.
Once the game is complete the user is presented with either the [you win screen](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/you-win-screen.png?raw=true " you win screen") or the [game over screen](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-over-screen.png?raw=true "game over screen") depending on the outcome of the game.
If the user wins they are presented with the option to move on to the next level. However if they lose they are presented with the option to start again via the New Game button.

## Features

### Main Game Logo
This logo was deaigned using a software solution called [Placeit](https://placeit.net/) and is designed to convey the origional idea for the game theme which is based on the antics of my mischevious pet rabbit.

![main-image](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/main-image.png?raw=true "main logo")

### How To Play Button
This button appears on the home page and when clicked reveals the instructions for how to play the game. Then once the close button is clicked the instructions disappear.


![how-to-play-button](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/instructions-button.png?raw=true "how to play button")

### Start Button
This is the button that allows the user to start the game play once they have read the instructions.

![start-button](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/start-game-button.png?raw=true "start game button")

### Main Game Play Area
This was created using HTML canvas it is designed to be responsive on any device. The canvas is where all the game play happens.


![game-play-area](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-play-screen.png?raw=true "game play screen")

### Player Score
The score feature keeps count of how many times the rabbit catches the carrot. If the score equals 20 before the time runs out or the user loses all their lives then they have won the game.


![score](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/score.png?raw=true "score")

### Time left/ Countdown
The timer feature counts down in seconds from 60. If the users score is less than 20 when the timer counts down to 0 then the game is over.


![countdown timer](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/time.png?raw=true " timer/countdown")

### Lives Left
The application also keeps count of the players lives. If the rabbit collides with one of the moving foxes then the player loses a life. If the players lives counter equals 0 before the player has achieved 20 points then the game is over.


![lives left](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/lives.png?raw=true "lives left")

### Mobile Game Controls
One of the goals of this project was to allow users to play the game on any device. One of the ways this was achieved was to add mobile controls on devices below a certain screen size. The buttons allow the user to control the main sprite just as they would using the arrow keys on a keyboard. Once the button is pressed down the color of the button turns orange to show the user the button is responding to their interaction.

![mobile-controls](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/mobile-game-controls.png?raw=true "mobile game controls")

### Time Running Out Game Screen
To add aditional suspence to the game once the timer gets to 10 seconds left the game screen turns red and audio of a clock counting down begins to play. This will stop if either the players score gets to 20 or the timer runs out or the player loses all of their lives.

![time running out game screen](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/time-running-out.png?raw=true " time runnig out image")

### Gain additional lives with Super Brocoli
This feature was added towards the end of the development phase of this project. there will be a period in each level of the game where the super Brocoli appears on the game screen. If the player manages to catch the Super Brocoli before it disappears they will get an extra life.

![Super Brocoli](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/super-brocoli.png?raw=true "Super Brocoli")


### You Win Screen
Depending upon the outcome of the game the user will be presented with one of two screen with some options.
If the user has managed to score 20 points before the time runs down to 0 or before they have lost all of there lives they will be presented with the following screen.
Which not only tells the user they have completed the level it also gives them the option to continue to the next level.
![you win screen](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/you-win-screen.png?raw=true "you win screen")

### Game Over Screen
Alternatively if the user has failed to score 20 points before the timer runs down to 0 or they have lost all of their lives they will be presented with the game over screen that gives the user the option to begin a new game.

![game over screen](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-over-screen.png?raw=true " game over screen" )

### Play in Portrait Mode
Throughout the development of the project it was becomming clear that the game play screen would have to be scaled down a lot to accomodate game play in landscape mode. But I felt that this would severly effect the users experience whilst playing the game as the screen and controls would be so small that the game would become very difficult to play.
So I decided to only allow game play on mobile devices in portrait mode to ensure the user had a good experience whilst on the site and had a positive remotional response to the game during and after the visit.
So when the user tries to play the game in landscape mode on any mobile device the game play screen disappears and the user is greated with a warning to turn the device to portrait to comtinue playing the game.

![play in portrait mode](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/use-in-portrait.png?raw=true "prompt the user to turn the device to portrait")

### Multiple Levels of game play
The application has 3 levels of game play each level increasing in difficulty due to the increase in enemies on each level please see images below.

#### Level 1

![Level 1 game play](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-play-screen.png?raw=true "Level 1 game play")


#### Level 2

![Level 2 Game Play](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-level-2.png?raw=true " Level 2 Game Play")


#### Level 3

![Level 3 Game Play](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/game-level-3.png?raw=true "Level 3 Game Play")


## Technologies Used
### Languages
* HTML 
* CSS
* JavaScript

### Additional tools used within the project
* FontAwesome
* Placeit
* GitHub
* GitPod
* Chrome Dev Tools
* JustinMind free prototyping tool


## Testing
### Cross Platform Testing
Once the site was completed and deployed it was tested on four web browsers to check that the application behaved and performed the same way on each one.
The browsers used where:
* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

Overall I was pleased to see that the sites performancer and behaviour was consistent througfhout all four browsers.


### Compatability Testing
Once deployed the site was tested on numerous devices to ensure that performance and behaviour were consistent. The devices used are as follows:
* Asus VivoBook Laptop
* IPad Air 3
* Samsung Galaxy s8
* Oppo a72
* various templates within Chrome Dev Tools

Performance and behaviour of the application whilst being tested on these devices was consistent and the application behaved as intended on each device.


### Responsive Testing
As well as the application been tested on all the devices mentioned above, the application was also tested using the responsive screen view in chrome dev tools. This additional testing really helped to pick out any responsiveness issues that had previously been overlooked.
However the application was very responsive and behaved the way the developer intended on all screen sizes.


## Validator Testing
### HTML 
The tool I chose to use to validate my HTML was [W3C Markup Validator](https://validator.w3.org/)
and I am delighted to say that there were no major  errors or issues with my Markup. As you can see from below.

#### Home Page

![Home Page HTML Validator](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/index-html-validator.png?raw=true)


#### Level 1

![Level 1 HTML](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/level1-html-validator.png?raw=true "Level 1 HTML Validator")


#### Level 2

![Level 2 HTML](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/level2-html-validator.png?raw=true "Level 2 HTML Validator")


#### Level 3

![Level 3 HTML](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/level3-html-validator.png?raw=true " Level 3 HTML Validator")


## A Note about semantic HTML
 Within the project semantic HTML was origionally used. However upon testing the markup with the [W3C Markup Validator](https://validator.w3.org/) I was presented with the following warnings.
 ![semantic html warnings](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/semantic%20HTML%20warnings.png?raw=true "semantic html warnings")

 So based on these results it was decided between myself and my mentor to follow the advice of the warnings shown above and replace the semantic html tags with div tags instead.
 The markup was then tested again and it produced no warnings or errors.


### CSS
The CSS file was reasonably small for this project ( around 300 lines) as a lot of the styling was done using JavaScript. The validator service used for testing the CSS was [W3C CSS Validator Service](https://jigsaw.w3.org/css-validator/) and I was delighted to see that there were no major issues or errors within the code.

![CSS Validator](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/css-validator.png?raw=true "CSS Validator results")


### Javascript
The service that Iused to test and validate my Javascript was [JS Hint](https://jshint.com/) I tested each of the 4 JS files in my project seperatly and was pleased to find that the only issues that occured where a few unnecessary semi colons and one unused variable. All of these issues have now been corrected and the final results before submission can be seen below.

#### script.js

![script.js file validator](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/script-js-hint.png?raw=true "script.js file validator")


#### level1.js

![level1.js validator](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/level1-js-hint.png?raw=true " lelvel1.js validator results")


#### level2.js

![level2.js Validator Results](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/level2-js-hint.png?raw=true "level 2.js Validator results")


#### level3.js

![Level3.js Validator Results](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/level3-js-hint.png?raw=true "Level3.js validator results")


## Performance and accessibility Testing
To test the overall performance and accessibility of the application U used [The Google Chrome Lighthouse Extension](https://developer.chrome.com/docs/lighthouse/) I tested both performance and accesibility on desktop and mobile devices and I was very pleased with the results.

### Desktop

![Lighthouse results for Desktop](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/lighthouse-desktop.png?raw=true " Lighthouse results for desktop")

For mobile the results wearn't quite as impressive but overall I am still very pleased with the results.

### Mobile

![Lighthouse results for mobile](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/lighthouse-mobile.png?raw=true "Lighthouse results for mobile")


## Test Driven Development (TDD) VS Behaviour Driven Development (BDD)
### Test Driven Development
Test driven development is a form of development that requires a software testing tool such as Jest. It allows the developer to build code incrementally and test the code line by line in an automated way and the tests are usually written before the actual code itself. This form of development is extremely advantageous especially if working in larger teams. It makes each line of code far more robust and can reduce the amount of errors made when compared to Behaviour Driven Development it is also less resource hungry and allows developers to test for "edge cases" that may be more difficult to test otherwise. However this type of development can have it's draw backs as the quality of the tests we produce will depend on the questions we are asking of our testing software.
As pointed out this type of development is highly advantages when working in large teams but within the scope of this project there is only one developer and as the application is based on game play and the user interacting with the game I felt that the Behaviour Driven Development approach was more appropriate.

### Behaviour Driven Development
So as mentioned previously I felt that using a BDD approach was more approapriate for this project. It allowed me to test each peice of code manually and incrementally before moving on to the next feature of the game.
An example of this would be getting the main sprite (The Rabbit) to move in all directions, this of course could have been done in a TDD approach however by using a BDD approach it allowed me to interact with the sprite and incrementally add to the code.
Firstly I wrote the code that  would move the main sprite in an upwards trajectory. (By decrementing the Y position of the rabbit) and once this peice of code produced the desired behaviour I then moved on to writting the code that would move the main sprite in a downward trajectory (incrementing the Y position) and so on and so forth.
By adopting the BDD approach it allowed me to put myself in the users shoes and to see how all of the game play responded to the users input.


## Bugs
The bugs that where encountered during this project where addressed on encountering them.
The nsolutions to the issues that come up during the development of this project where found through reasearch by using Google and Youtube as well as stack overflow and slack to ask advice from other students who encountered similar issues.


### Bug 1 - Game play in Landscape mode
The biggest issue I had within the development of this project was enabling the game screen and user control to fit onto some mobile devices in landscape mode.

Many things where tried to overcome this such as reducing the size of the game screen and size of the user controls to physically moving the user controls to the very bottom of the window object. However after trying  to make the game screen, user controls, score count, timer and life count fit onto a mobile device in landscape it was decided it would have a negative effect on the user experience.
So therefore using the orientatio media feature in CSS a feature was added that would promt the user to return the device to portrait if they tried to play the game in landscape move.
see code and warning screen below.

#### CSS Orientation Media Feature

![CSS orientation media query](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/css-orientation.png?raw=true "Css Media Query Orientation")

#### Return to portrait mode warning

![Return to Portait Mode](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/use-in-portrait.png?raw=true "Use in portrait mode warning")


### Bug 2 - Glitches With Audio
Another issue arrose within the development of this project and that was the game audio. The main audio was fine as I ensured it would begin playing as soon as the game screen had loaded.
See code below.

![Window Onload function](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/testing-images/window-onload.png?raw=true "window onload function")

However some of the conditional statements used within the project determined what sounds would play and when. So initially I Used the .pause() function to stop the audio from playing depending on what conditions where either true or false.
This seemed to have a negative effect on the project and would cause audio to glitch especially the countdown timer audio whenever a you win or game over screen was called.
So to resolve this if a condition was met that dictated a specific sound had to be stopped rather than using the .pause method I simply redefined the variable as undefined.
See Below:

![Audio undefined to remove glitches](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/undefined-countdown.png?raw=true " Undefined countdown variable")

### Bug 3 - Enemy Sprite Random movements interfering with other Game Play
One of the biggest issues I had during this project was the results of the collision between the main sprite (The rabbit) and the enemy sprite ( The Carrot) the initial idea was that when a collision was detected between the rabbit and the carrot the carrot would move to a random position on the canvas.
However some of the random positions interfered with the walls that had been put in the game as the carrot would sit on top of them or go outside the boundry of the canvas itself.
The solution for this was to generate an empty array.
So firstly I used a for loop to push 1000 values (this was done as the canvas in which the game is played is 1000 pixels wide) to the empty array called XcoOrd. Then creating another array called deleteNums which mapped out all of the x coordinates that I wanted the carrot to avoid so it wouldn't collide with any other elements of the game.
Finally I used the .filter() method to create a new array called enemyXValue that would take the 1000 values of the XCoOrd array filter out the values specified in the deleteNums array which would leave the enemyXValue array with the desired x positions (horizontal positions) to which the carrot would appear randomly on the canvas.
Here is the function I used to achieve this.

![Main Collision Function](https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2/blob/main/assets/readme-images/main-collision.png?raw=true " Main Collision Function")


## Wish List

Upon the completion of this project and reflecting on how I feel the project went overall I feel that there are some additional feature that I could add to further the user experience.

* Add a login screen and a leader board
* Add aditional enimies or imcreased difficulty to the game
* Add additional Levels to the 3 that already exist
* Add a charecter screen to allow the user to choose which sprite they would like to play the game with


## Deployment
Here is a step by step guide of a how the application was deployed to GitHub Pages.

* The Code Institute provided [this template](https://github.com/Code-Institute-Org/gitpod-full-template) Which was used for the project.

* Then a new repository was created using the CI Template and named accordingly.

* Using the git pod extension (green GitPod button at the top right of the repository) the project was created within GitPod.

* During the build process the code was regularly saved, commited and then pushed to GitHub.

* To deploy the site on GitHub pages I navigated to the repo settings tab, choose the main branch and pressed save. This provided the following url https://shaun-finnegan.github.io/Shaun-Finnegam-Milestone-project-2/ which is the link to the live site.

To run this project on your machine you should:

* Go to the GitHub Repository https://github.com/Shaun-Finnegan/Shaun-Finnegam-Milestone-project-2

* Click on the code button and download the .zip file

* Then extract the .zip file so that the files are now on your machine.

* Run the index.html file on your choosen browser.


## Credits

### Code Institute

A Massive thank you to the team at Code Institute who have provided me with the opportunity to be able to study and learn the basics of HTML, CSS and JavaScript

### Shipley College

Google fonts was used to provide the main font families that where used throughout this project.

### Am I Responsive

Am I Responsive was used to create the Images at the top of this README.md file to showcase the responsiveness of thwe website.

### W3C 

A Massive THank you to W3C Schools for providing bothe the HTML and CSS validators to allow me to test my code.

### JS Hint

A massive thank you to JS Hint for providing the JavaScript validation tool.


### Franks Laboratory

A Massive thank you to Frank who's tutorials have allowed me to understand the priciple fundamental in game development.


### Pixabay

Another massive thank you to PixaBay for providing such high quality audio resources. The use of which has greatly improved the user experience within my application.


### vexels, clipart library & Free Icons
A Massive thank you for providing the images that made this web application possible.









