// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
    return `
  # ${data.title}
  
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)

  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  ## Installation
        ${data.installation}
  ## Usage
  ${data.usage}
  ## Licence
  ${data.licence}

  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions?
  ✉️ Contact me with any questions: ${data.email}
  ## GitHub
  ![Image of me](${githubInfo.githubImage})
  - [GitHub Profile](${githubInfo.profile})
  `;
  }
  
  module.exports = generateMarkdown;