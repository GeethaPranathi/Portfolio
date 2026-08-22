import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATS_FILE = path.join(__dirname, '../src/data/live-stats.json');

// --- LEETCODE FETCH ---
async function fetchLeetCodeStats(username) {
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com'
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
            userContestRanking(username: $username) {
              globalRanking
            }
          }
        `,
        variables: { username }
      })
    });

    const data = await response.json();
    const stats = data.data?.matchedUser?.submitStats?.acSubmissionNum || [];
    const ranking = data.data?.userContestRanking?.globalRanking || "N/A";

    const getCount = (diff) => {
      const item = stats.find(s => s.difficulty === diff);
      return item ? item.count : 0;
    };

    return {
      totalSolved: getCount("All"),
      easySolved: getCount("Easy"),
      mediumSolved: getCount("Medium"),
      hardSolved: getCount("Hard"),
      ranking: ranking
    };
  } catch (error) {
    console.error("Failed to fetch LeetCode:", error);
    return null;
  }
}

// --- GITHUB FETCH ---
async function fetchGitHubStats(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { 'User-Agent': 'Node-Fetch' }
    });
    const data = await response.json();
    
    return {
      publicRepos: data.public_repos || 0,
      followers: data.followers || 0
    };
  } catch (error) {
    console.error("Failed to fetch GitHub:", error);
    return null;
  }
}

// --- MAIN RUNNER ---
async function updateStats() {
  console.log("Fetching latest coding stats...");
  
  // Read existing stats to preserve GFG if it fails or isn't fetched
  let currentStats = {};
  if (fs.existsSync(STATS_FILE)) {
    currentStats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf-8'));
  }

  const leetcodeStats = await fetchLeetCodeStats("GeethaPranathi");
  const githubStats = await fetchGitHubStats("GeethaPranathi");

  const newStats = {
    ...currentStats,
    lastUpdated: new Date().toISOString()
  };

  if (leetcodeStats && leetcodeStats.totalSolved > 0) {
    newStats.leetcode = leetcodeStats;
    console.log(`Updated LeetCode: ${leetcodeStats.totalSolved} solved`);
  }
  
  if (githubStats && githubStats.publicRepos !== undefined) {
    newStats.github = githubStats;
    console.log(`Updated GitHub: ${githubStats.publicRepos} repos`);
  }

  // Save to file
  fs.writeFileSync(STATS_FILE, JSON.stringify(newStats, null, 2));
  console.log("Successfully wrote to live-stats.json");
}

updateStats();
