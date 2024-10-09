
# GitHub Tracker CLI

GitHub Tracker CLI is a Node.js application written in TypeScript that allows users to fetch and display recent GitHub activity for a specified user. (It was intended to achieve the roadmap.sh challenge. check it at:https://roadmap.sh/projects/github-user-activity )

## Features

- Fetch public GitHub activity for any user
- Display the 5 most recent events
- Simple command-line interface

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   
   git clone https://github.com/yourusername/github-tracker.git
   cd github-tracker
   

2. Install the dependencies:
   
   npm install
   

## Usage

To run the application in development mode:


npm run dev


To build and run the application:


npm run build
npm start


Once the application is running, you will be prompted to enter a GitHub username. The application will then fetch and display the recent public activity for that user.

To exit the application, type "exit" when prompted for a username.

## Project Structure

- `src/index.ts`: Main entry point of the application, handles CLI interaction
- `src/fetchGHActivity.ts`: Contains the function to fetch GitHub activity from the API

## Scripts

- `npm run build`: Compiles TypeScript to JavaScript
- `npm run start`: Runs the compiled JavaScript
- `npm run dev`: Runs the application in development mode using ts-node

## Dependencies

- `typescript`: JavaScript superset that compiles to clean JavaScript output
- `ts-node`: TypeScript execution and REPL for Node.js
- `@types/node`: TypeScript definitions for Node.js

## Contributing

Contributions to the GitHub Tracker CLI are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
