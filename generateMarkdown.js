// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // Create an object that maps license names to badge URLs
    const licenseBadges = {
      'MIT': 'https://img.shields.io/badge/license-MIT-brightgreen.svg',
      'Apache 2.0': 'https://img.shields.io/badge/license-Apache%202.0-blue.svg',
      // Add more license badges and URLs as needed
    };
  
    // Check if the given license is in the licenseBadges object
    if (license in licenseBadges) {
      return `![License](${licenseBadges[license]})`;
    }
  
    return ''; // Return an empty string if the license is not recognized
  }

  // TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    // Create an object that maps license names to their official URLs
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
      // Add more license URLs as needed
    };
  
    // Check if the given license is in the licenseLinks object
    if (license in licenseLinks) {
      return `[License](<${licenseLinks[license]}>)`;
    }
  
    return ''; // Return an empty string if the license is not recognized
  }
  // TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

  function renderLicenseSection(license) {
    // Use the license badge and link functions to generate the license section
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
  
    if (badge && link) {
      return `This project is licensed under the ${link} license. ${badge}`;
    }
  
    return ''; // Return an empty string if the license is not recognized
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseSection = renderLicenseSection(data.license);
    return `# ${data.title}
  
  ${licenseSection}
  
  ## Description
  ${data.description}
  
  <!-- Add more sections based on your README structure -->
   
  `;
  }
  
  module.exports = generateMarkdown;
  
