const generatePage = (managerName, managerId, managerEmail, managerOffice, engineerName, engineerId, engineerEmail, engineerGithub, internName, internId, internEmail, internSchool) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Team Profile</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../src/style.css" />
</head>
<body>
    <header class="header">
        <h1>
            <a>Our Team</a>
        </h1>
    </header>

    <div class="container">
        <div class="card">
            <div class="card__body">
                <span class="tag tag-blue">TEAM MANAGER</span>
                <h4>${managerName}</h4>
                <p>Employee ID: ${managerId}</p>
                <p>Office Number: ${managerOffice}</p>
                <div class="card__footer">
                    <div class="contact">
                        <div class="contact__info">
                            <p>Contact:</p>
                            <a href="mailto:${managerEmail}">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card__body">
                <span class="tag tag-red">ENGINEER</span>
                <h4>${engineerName}</h4>
                <p>Employee ID: ${engineerId}</p>
                <div class="card__footer">
                    <div class="contact">
                        <div class="contact__info">
                            <p>Contact:</p>
                            <a href="https://github.com/${engineerGithub}">GitHub</a>
                            <br>
                            <a href="mailto:${engineerEmail}">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
        <div class="card__body">
            <span class="tag tag-brown">INTERN</span>
            <h4>${internName}</h4>
            <p>Employee ID: ${internId}</p>
            <p>School: ${internSchool}</p>
            <div class="card__footer">
                <div class="contact">
                    <div class="contact__info">
                        <p>Contact:</p>
                        <a href="mailto:${internEmail}">Email</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
</body>
</html>
    `
};

module.exports = generatePage;