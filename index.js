// Required dependencies and functions
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

// Team Manager prompt
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Welcome to the Professional Tream Profile Generator!  Please enter the Team Manager's name:",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the Team Manager');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "Please enter the Team Manager's employee ID number:",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's employee ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Please enter the Team Manager's email:",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "Please enter the Team Manager's office number:",
            validate: managerOfficeInput => {
                if (managerOfficeInput) {
                    return true;
                } else {
                    console.log("Please enter the Team Manager's email");
                    return false;
                }
            }
        }
    ]);
};

// Add additional Team Members prompt
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No'],
            default: 'Yes'
        }
    ]);
};

// If add Team Member - Choose 'Engineer' or 'Intern'
const engineerOrIntern = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'engineerIntern',
            message: 'Would you like to add an engineer team member or an intern team member?',
            choices: ['Engineer', 'Intern'],
            default: 'Engineer'
        }
    ]);
};

// Add Engineer
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "Please enter the engineer's name:",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "Please enter the engineer's employee ID number:",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's employee ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Please enter the engineer's email:",
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please enter the engineer's GitHub username:",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username");
                    return false;
                }
            }
        }
    ]);
};

// Add Intern
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Please enter the intern's name:",
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "Please enter the intern's employee ID number:",
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's employee ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Please enter the intern's email:",
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Please enter the name of the intern's school:",
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("Please enter the name of the intern's school");
                    return false;
                }
            }
        }
    ]);
};

addManager()
    // .then(addEmployee)
    // .then(engineerOrIntern)
    // .then(addEngineer)
    // .then(addIntern)
    // .then(addEmployee)
    .then(answers => {
        const htmlFile = generatePage(answers.managerNameInput, answers.managerIdInput, answers.managerEmailInput, answers.managerOfficeInput);

        fs.writeFile('./dist/team-profile.html', htmlFile, err => {
            if (err) throw err;
            console.log('Team Profile questionnaire complete! Checkout your new team-profile.html file in the "dist" folder!')
        });
    });