# react-birthday-reminder-app
Created with CodeSandbox

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview
Created a birthday reminder app with React

### The challenge

Users should be able to:

-	See birthdays for the current date if there are any
-	Click on the previous day button to check previous dates
-	Click on the next day button to check future dates
-	Click on the month drop down selector to choose which month they are viewing 


### Screenshot

![](./Screenshot.png)


### Links

- Solution URL: (https://github.com/Jud1th1/react-birthday-reminder-app)
- Live Site: 

## My process
- After watching a tutorial on the Birthday reminder app from FreeCodeCamp, I utilized my previous knowledge of CSS, JS, and React to enhance the application. I found the concept of the app intriguing because I struggle with remembering birthdays due to my large family. I designed this app specifically for myself and have plans to add more features in the future.
- To start, I implemented a feature that displays the list items for the current date. I achieved this by creating a formatDate function that utilizes the toLocaleDateString method to format the date based on the user's locale.
- To enhance the app further, I added two buttons that allow users to control which days are being viewed. These buttons enable users to navigate between previous and next days, making it easier to see past or upcoming birthdays. The corresponding functions for these buttons modify the currentDate state by incrementing or decrementing the date accordingly.
- The most challenging aspect was customizing the code to identify people with birthdays matching the displayed date. After experimenting with different approaches and following tutorials, I introduced the filteredPeople array. This array is computed based on the current date and filters the people array to include only those with birthdays matching the month and day of the current date.
- The initial data in JavaScript was provided in the starter code. I simply added my family's birthdays and images. Additionally, I included a birthday object that not only stores the birthdays but also calculates the age. To accommodate these changes, I updated the List component as follows: I obtained the current date using new Date(), converted the person's birthdate to a Date object using new Date(birthday), calculated the age by subtracting the birth year from the current year (currentDate.getFullYear() - birthdate.getFullYear()), and assigned the isBirthdayToday variable true if the current month and date match the person's birth month and date. Finally, different messages are displayed based on whether it's the person's birthday today or not.
- To provide more flexibility, I added a month selection feature. This allows users to choose a specific month without repeatedly clicking the forward or backward buttons to see birthdays from different months. I implemented a new event handler function called handleMonthChange that sets the month of the current date based on the selected value from the <select> element.
- Once I was satisfied with the functionality, I focused on refining the app's visual appearance. I restructured the styling layout to create a more visually pleasing hierarchy and balance on the page. I introduced new colors, fonts, and applied a text animation effect to the "Happy Birthday" title.
- Overall, I combined the tutorial's initial code with my own knowledge and creative ideas to enhance the Birthday reminder app, making it more personalized and user-friendly.

  
  
### Built with

- React
- JSX
- HTML
- CSS
- Javascript
- Mobile design


### What I learned

-	How to work more with date and time: I had to use JavaScript's Date object and its methods to handle dates, calculate age, compare dates, and format dates for display.
- Problem solving and debugging: Using CodeSandBox terminal, I would readjust my methods and approach when errors would occure i.e handling a handling the "missing radix parameter" error, etc.


### Continued development

- I plan on adding more birthdays to the app
- I would like incoporate a popup calendar if possible, where I can view all the birthdays of one month at a time.

