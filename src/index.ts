// Brings readline which reads the input from the user
// Also brings stdout and stdin which are used to read the input from the user and write
// the output to the console
// Lastly it uses the fetch function that I created
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { fetchGHActivity } from './fetchGHActivity';

// Creates a readline interface that reads the input from the user
const rl = readline.createInterface({ input, output });

// Displays the GitHub activity for the user
async function displayGitHubActivity(username: string) {
  console.log(`Fetching activity for ${username}...`);
  
  // Fetches the GitHub activity for the user
  const activity = await fetchGHActivity(username);

  // Checks if the activity is null or empty and displays the appropriate message, using the github API.
  if (activity && activity.length > 0) {
    console.log('GitHub Activity:');
    activity.slice(0, 5).forEach((event, index) => {
      console.log(`${index + 1}. Type: ${event.type}, Repo: ${event.repo.name}, Created at: ${event.created_at}`);
    });
  } else if (activity === null) {
    console.log('Failed to fetch activity. Please check the username and try again.');
  } else {
    console.log('No recent public activity found for this user.');
  }
}

// Basically handles the CLI interaction with the user
function promptUser() {
  rl.question('Welcome to GitHub tracker CLI! Provide a name to track (or type "exit" to quit): ', async (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    await displayGitHubActivity(input);
    promptUser();
  });
}

promptUser();
