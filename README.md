# Redux Take Home Challenge

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Implement an interactive phone call scheduler using React and Redux: 

- There should be several 1 hour time slots in a given day between 9 and 5.
-  When the app first starts, these time slots are all open. 
- When clicking any time slot, a modal should open that enables the user to enter a name and phone number of the person with whom they are scheduling a phone call during that time slot. 
- Upon submitting the modal, that time slot should visibly change color and update to display the information just entered. 
- Clicking the same slot again should open the same modal, but with its input fields already populated with the information already given to that time slot. This should allow the user to easily fix a typo and resubmit, saving the updated information. 

The ultimate goal would be to have a week's worth of days where each day has 8 hour long time slots between 9 and 5, but just getting one day working would be acceptable. You should also do your best to make the app as presentable as possible, looks matter to both employers and clients!

You can use this [Screenshot Reference of one day of activities](https://user-images.githubusercontent.com/25756676/110664385-591b3e80-8195-11eb-8faf-3078f5abdd9e.png) as a reference but we encourage you to implement your own design.


## Go get 'em

You have been provided with a boilerplate that has React and Redux set up. You have ALSO been provided with materials intended to provide enough guidance for you to be able to write the boilerplate yourself from scratch if you want to: [This new set up writeup](SETUP.md) 

If you haven't yet used modals in React, your first step would be to google it, which would probably land you at [this npm package](https://www.npmjs.com/package/react-modal) pretty quickly.

Originally by https://github.com/gsmith98/ReduxChallenge
