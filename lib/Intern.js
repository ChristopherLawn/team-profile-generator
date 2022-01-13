const Employee = require('./Employee.js')
class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email)
        this.school = school;
        this.role = role;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.role('Intern');
    }
}
module.exports = Intern;