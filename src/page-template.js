const generatePage = (managerArr, engineerArr, internArr) => {
    let profilePage = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Team Profile</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <header class="header">
        <h1>
            <a>Our Team</a>
        </h1>
    </header>

    <div class="container">
    `
    for (i = 0; i < managerArr.length; i++) {
    profilePage += `
        <div class="card">
            <div class="card__body">
                <span class="tag tag-blue">TEAM MANAGER</span>
                <h4>${managerArr[i].name}</h4>
                <p>Employee ID: ${managerArr[i].id}</p>
                <p>Office Number: ${managerArr[i].officeNumber}</p>
                <div class="card__footer">
                    <div class="contact">
                        <div class="contact__info">
                            <p>Contact:</p>
                            <a href="mailto:${managerArr[i].email}">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    for (i = 0; i < engineerArr.length; i++) {
    profilePage += `
        <div class="card">
            <div class="card__body">
                <span class="tag tag-red">ENGINEER</span>
                <h4>${engineerArr[i].name}</h4>
                <p>Employee ID: ${engineerArr[i].id}</p>
                <div class="card__footer">
                    <div class="contact">
                        <div class="contact__info">
                            <p>Contact:</p>
                            <a href="https://github.com/${engineerArr[i].github}">GitHub</a>
                            <br>
                            <a href="mailto:${engineerArr[i].email}">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    for (i = 0; i < internArr.length; i++) {
    profilePage += `
        <div class="card">
        <div class="card__body">
            <span class="tag tag-brown">INTERN</span>
            <h4>${internArr[i].name}</h4>
            <p>Employee ID: ${internArr[i].id}</p>
            <p>School: ${internArr[i].school}</p>
            <div class="card__footer">
                <div class="contact">
                    <div class="contact__info">
                        <p>Contact:</p>
                        <a href="mailto:${internArr[i].email}">Email</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    }

    profilePage +=
    `
    </div>
    
</body>
</html>
    `
    return profilePage;
};

module.exports = generatePage;