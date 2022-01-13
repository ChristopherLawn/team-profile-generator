const Employee = require('../lib/Employee.js');

test('checks result of id number function', () => {
    const employee = new Employee ('Dave', 100, 'christopher.lawn@yahoo.com');
    expect(employee.getID()).toBe(100);
});