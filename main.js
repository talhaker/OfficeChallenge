//write your code here to make the tests pass
let Document = function(name) {
    this.employeeName = name;
}

let Employee = function(name) {
    this.name = name;
}
Employee.prototype.work = function(office) {
    for (let ix = 0; ix < 10; ix++) {
        office.documents.push(new Document(this.name));
    }
}

let Manager = function(name) {
    this.name = name;
    this.employees = [];
}
Manager.prototype.hireEmployee = function(name) {
    this.employees.push(new Employee(name));
}
Manager.prototype.askEmployeesToWork = function(office) {
    this.employees.forEach(employee => employee.work(office));
}

let Cleaner = function(name) {
    this.name = name;
}
Cleaner.prototype.clean = function() {
    console.log("Clean");
}

let Office = function() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
}
Office.prototype.hireCleaner = function(name) {
    this.cleaners.push(new Cleaner(name));
}
Office.prototype.hireManager = function(name) {
    this.managers.push(new Manager(name));
}
Office.prototype.startWorkDay = function() {
    this.managers.forEach(manager => manager.askEmployeesToWork(this));
    this.cleaners.forEach(cleaner => cleaner.clean());
}