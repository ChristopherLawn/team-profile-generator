const Intern = require('../lib/Intern.js');

test('checks result of school name', () => {
    const intern = new Intern ('Dave', 100, 'christopher.lawn@yahoo.com', 'UMass')
    expect(intern.getSchool()).toBe('UMass');
});