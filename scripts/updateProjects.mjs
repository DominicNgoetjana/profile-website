import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import https from 'https';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = 'dominicngoetjana';

if (!GITHUB_TOKEN) {
  console.error('Please set the GITHUB_TOKEN environment variable');
  process.exit(1);
}

const options = {
  hostname: 'api.github.com',
  headers: {
    'User-Agent': 'Node.js',
    'Authorization': `token ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  }
};

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function getRepoDetails() {
  try {
    // Fetch repositories
    const repos = await httpsGet(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`);
    
    // Get languages for each repo
    const reposWithDetails = await Promise.all(
      repos.map(async (repo) => {
        const languages = await httpsGet(repo.languages_url);
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          languages: Object.keys(languages),
          homepage: repo.homepage,
          github_url: repo.html_url,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          watchers_count: repo.watchers_count
        };
      })
    );

    // Write to projects.json
    const projectsData = {
      projects: reposWithDetails,
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    // Get the directory path of the current module
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const projectsFile = join(__dirname, '..', 'src', 'data', 'projects.json');

    await writeFile(projectsFile, JSON.stringify(projectsData, null, 2));
    
    console.log('✅ Projects data updated successfully!');
    console.log(`📅 Last updated: ${projectsData.lastUpdated}`);
    console.log(`📊 Total projects: ${reposWithDetails.length}`);
  } catch (error) {
    console.error('❌ Error updating projects:', error.message);
    process.exit(1);
  }
}

getRepoDetails();
