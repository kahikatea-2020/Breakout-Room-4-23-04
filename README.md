# Flash Cards for Revision

This app is for revision and learning purposes, initially it will have a built in suite of questions relating to things we have learnt at Enspiral Dev Academy. 

We aim to have it be able to render appropriate questions based on what you are having difficulty answering.

Our questions initially will be stored in an array of 'question' objects, the objects will have an id, a question value, an answer value, the amount of times the question has been asked, as well as the amount of times the question has been answered correctly.

question {
  id: 1,
  question: "",
  answer: "",
  timesAsked: 1,
  correctAnswers: 1
}



## MVP 
-Render a flash card.

-Keep track of whether the answer was correct or not.

-Track the amount of times a user has gotten the question right or wrong.

## Stretch Goals

-Have an answer form a user can fill out to save notes for later.


## Steps

### Components

Heading Component
- The header of the page

Home Component
- Where you can choose which set of questions you want to answer, or what sort of questions you want
- Radio button select? 

Main Card Display
- Displays the question, and will flip to show the answer

Button Component
- Will render after the card has been flipped, will have the options for whether the question was correct or not, and for going to the next question

Statistics
- Display how often a correct answer was given, how often the question was asked

### Routes

React Routing

### Data

Will be placed in .js file

### Functions

#### To display a single card
##### MVP 
- Use the index of the array and increment it between questions

##### Stretch 
- Randomly render a question based on the difference between the amount of times the question has been asked and the amount of times it has been answered correctly

#### To go to other cards
##### MVP 
- Increment the index by one and go to the next element of the array, or decrement it to go to the previous one
##### Stretch
- Go to a randomly assigned card based on the difference between between the amount of times the question has been asked and the amount of times it has been answered correctly 

