![image](https://github.com/affzkwn/completedevnet/assets/71445275/5edcaf0a-509d-4f30-a80c-7dbe88cff6fc)
# Complete Developer Network Documentation Front-End
# Description
The Employee component is a part of a React web application that allows users to manage a list of employees or freelancers. Users can add, edit, and delete employees from the list. The component provides a table view to display the list of employees along with options to perform various operations.

# Usage
To use the Employee component in your application, follow these steps:

Import the Employee component at the top of your file where you want to use it.
/*# Example
import React from 'react';
import { Employee } from './Employee'; // Replace './Employee' with the correct path to the Employee component file.
Place the Employee component in your JSX/HTML code.
# Example
function App() {
  return (
    <div>
      <h1>Employee Management</h1>
      <Employee />
    </div>
  );
}*/
# Props
The Employee component does not accept any props from its parent component.

# State
The Employee component maintains the following state:

employees: An array that holds the list of employees fetched from the API.
modalTitle: A string representing the title of the modal displayed for adding/editing an employee.
usernameId: An integer representing the ID of the employee being edited. If it's 0, it indicates a new employee is being added.
username: A string representing the name of the employee being added/edited.
email: A string representing the email of the employee being added/edited.
phone: A string representing the phone number of the employee being added/edited.
skillsets: A string representing the skillsets of the employee being added/edited.
hobby: A string representing the hobby of the employee being added/edited.
filteredEmployees: An array that holds the list of employees filtered based on the search input.
# Methods
The Employee component provides the following methods:

refreshList(): Fetches the list of employees from the API and updates the employees and filteredEmployees state with the data.
changeusername(e): Updates the username state with the value entered in the name input field.
changeemail(e): Updates the email state with the value entered in the email input field.
changephone(e): Updates the phone state with the value entered in the phone input field.
changeskillsets(e): Updates the skillsets state with the value entered in the skillsets input field and filters the employees accordingly.
filterEmployees(): Filters the employees array based on the skillsets state and updates the filteredEmployees state with the filtered result.
addClick(): Sets the state to add a new employee, clearing all input fields.
editClick(emp): Sets the state to edit an existing employee with the details provided in the emp parameter.
createClick(): Sends a POST request to the API to create a new employee based on the input fields' values.
updateClick(): Sends a PUT request to the API to update the details of an existing employee based on the input fields' values.
deleteClick(id): Sends a DELETE request to the API to delete an employee with the given ID.
# Lifecycle Methods
The Employee component utilizes the componentDidMount lifecycle method to fetch the list of employees from the API when the component is mounted.

# Rendering
The Employee component renders a table view displaying the list of employees. It includes the following elements:

Search bar: An input field to search for employees based on their skillsets.
"Add Employee" button: A button to open the modal for adding a new employee.
Employee Table: A table displaying the list of employees with columns for ID, Username, Email, Phone No., Skillsets, Hobby, and Options (Edit/Delete buttons).
# Modal
The Employee component uses a Bootstrap modal to allow users to add/edit employees. The modal contains input fields for entering the employee's name, email, phone number, skillsets, and hobby. Depending on whether the user is adding or editing an employee, the appropriate action is triggered.

# API URL
The API_URL constant in the Employee component holds the base URL for the API endpoint to interact with the server and perform CRUD operations on employees.

# Error Handling
The Employee component handles errors gracefully when fetching data from the API or performing CRUD operations. If an error occurs, the component sets the employees and filteredEmployees states to an empty array and displays an appropriate error message.

# Notes
The component uses the fetch API to interact with the server. Ensure that the API server is running and accessible at the specified API_URL.
The filtering of employees based on skillsets is case-insensitive.
Example
Below is an example of how to use the Employee component in your application:

/*# Example
import React from 'react';
import { Employee } from './Employee'; // Replace './Employee' with the correct path to the Employee component file.

function App() {
  return (
    <div>
      <h1>Employee Management</h1>
      <Employee />
    </div>
  );
}

export default App;*/
# Dependencies
The Employee component requires the following dependencies:

React: To create and manage the component's user interface.
Bootstrap (CSS): For styling and to use the modal feature.
Ensure that these dependencies are installed in your project for the Employee component to function correctly.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


### 'npm install react-router-dom@5'
This mainly for switch import from react-router-dom able to be use as latest update not support switch anymore.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
