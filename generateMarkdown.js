// function to generate markdown for README
function generateMarkdown(data) {
console.log(data);
console.log("ReadMe Generated");


//repoName, description, table, install, usage, licenses, contributors,test,questions
  return `README - ${data.repoName}
          Team: ${data.contributors}
  
    -----

    Description: ${data.description}

    -----

    Table Of Contents:
      ${data.table}

    -----

    Installation: ${data.install}

    -----

    How to Use: ${data.usage}

    -----

    Licensure: 
    ${data.licenses}

    -----

    Common Testing Questions:
    ${data.test}

    -----

    Team Notes: 
    ${data.questions}

`;
}

module.exports = generateMarkdown;
