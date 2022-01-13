const Engineer = require('../lib/Engineer.js');

test('checks result of GitHub name', () => {
    const engineer = new Engineer ('Dave', 100, 'christopher.lawn@yahoo.com', 'ChristopherLawn')
    expect(engineer.getGithub()).toBe('ChristopherLawn');
});