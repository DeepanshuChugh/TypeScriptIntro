var Student = "Deepanshu";
var age = 55;
var isFetching = true;
var arr = [1, 23, 344, 34];
var arrS = ["ere", "er", "ere"];
var Fuple = ["Deep", true];
var Developer;
(function (Developer) {
    Developer["User"] = "Deepanshu";
    Developer["SuperUser"] = "Rahul";
    Developer["Admin"] = "Father";
    Developer["SuperAdmin"] = "hehe";
})(Developer || (Developer = {}));
console.log(Developer.User);
var sum = function (a, b) {
    return a + b;
};
function devide(a, b) {
    return a / b;
}
var hello = function (name) {
    console.log(name);
};
hello("Deepanshuoo");
var sectionA = {
    title: "Deepanshu",
    status: true,
    id: 23
};
var getName = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname;
    return "".concat(firstname, " ").concat(lastname ? lastname : "");
};
console.log(getName({ firstname: "Deepanshu", lastname: "Chugh" }));
var user_data = {
    prefix: "Mr",
    phone: [9, 9, 9, 9, 9, 8, 8, 8, 8, 8],
    addresses: ["Sector 21", "Gurgaon"],
    email: "deep@gmail.com",
    firstname: "Deepanshu",
    lastname: "Chugh"
};
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
var persons = [];
function PhoneBook(userData) {
    persons.push(userData);
    return persons;
}
