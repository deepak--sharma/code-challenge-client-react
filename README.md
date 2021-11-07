# Pragmateam code challenge client (React)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

# My Comments:-
1. I was able to write only 2 tests, but due to some issue which I'm yet to figure it out, the test - should render the message - is not able to render the passed product details in the html table.
2. In order to make shallow work with enzyme, I needed to install a dev dependeny package "jest-react-hooks-shallow"
3. The component App is using two hooks useState and useEffect, though I mocked them but still the state is not getting updated from the test.
4. I refactored the App component to accept data as props. In order to pass the test data from unit tests.  