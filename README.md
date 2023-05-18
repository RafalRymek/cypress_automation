# Creating and removing contacts using cypress script

## Cypress test automation script for creating and deleting contacts from the contact list

### Following tech stack is using:  
Node.js  
Javascript  
Cypress  

## Before your first run a test you should:
1. You should have `node.js` and `cypress` installed on your computer  
1.1 Install node.js form this page `https://nodejs.org/en`  
1.2 Install cypress:  
run in terminal write: `npm install cypress --save-dev`
2. Open the page https://thinking-tester-contact-list.herokuapp.com/ 
3.  Sign up with your email and password and create your account then you will have your `'accessToken'`  
4. in test `CreateUsers.cy` replace `'Bearer accessToken'` for your `'accessToken'`
5. in test `DeleteContactsViaUI.spec.cy` replace `userEmail` and `userPassword` for yours email and password


## Setup
1. open terminal
2. run git clone https://github.com/RafalRymek/cypress_automation.git to clone repository
3. run cd cypress_automation to move to local repository folder
4. install necessary dependencies

## Test execution
1. Test relative path cypress/e2e/APITesting  
1.1 To run `CreateUsers.cy` test you should:   
open terminal    
run `npx cypress run --spec cypress/e2e/APITesting/CreateUsers.cy.js`  
1.2 To run `DeleteContactsViaUI.spec.cy` test you should:  
open terminal  
run `npx cypress open` and run your spec in cypress in E2E Testing
