const Manager = require('../lib/Manager.js');

test('checks result of office number function', () => {
    const manager = new Manager ('Dave', 100, 'christopher.lawn@yahoo.com', 10)
    expect(manager.getOfficeNumber()).toBe(10);
});