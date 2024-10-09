// This interface defines the structure of the GitHub event object that is returned by the GitHub API.
interface GitHubEvent {
    type: string;
    repo: {
      name: string;
    };
    created_at: string;
  }
  
  // This function fetches the GitHub activity for a given username. It returns
  // a Promise that resolves to an array of GitHubEvent objects or null if there was an error.
  export async function fetchGHActivity(username: string): Promise<GitHubEvent[] | null> {
    const apiUrl = `https://api.github.com/users/${username}/events/public`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        if (response.status === 404) {
          console.log(`User ${username} not found.`);
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: GitHubEvent[] = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching GitHub activity:', error);
      return null;
    }
  }