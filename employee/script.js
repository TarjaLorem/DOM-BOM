var listEmp = [];
var limit = 3;
//var sumEmp = 0;
//your code here
var divWrapp = $("<div></div>").attr("class", "formWrapp");
$("body").append(divWrapp);
var newForm = $("<form></form>").attr("class", "employeeList");
$(divWrapp).append(newForm);

var addEmployee = function () {
    var firstName = $("<input type='text' required>")
        .attr("class", "employeeFirstName")
        .attr("placeholder", "first name")
        .attr("name", "firstName");

    var lastName = $("<input type='text' required>")
        .attr("class", "employeeLastName")
        .attr("placeholder", "last name")
        .attr("name", "lastName");

    var salary = $("<input type='number' required>")
        .attr("class", "employeeSalary")
        .attr("placeholder", "salary")
        .attr("name", "salary");


    var position = $("<input type='text' required>")
        .attr("class", "employeePosition")
        .attr("placeholder", "position")
        .attr("name", "position");

    var addSubmit = $("<button></button>")
        .attr("class", "addEmployee")
        .text("Add New employee");

    var countEmp = $("<input type='text'>")
        .attr("class", "employeeCount")
        .attr("placeholder", "count")
        .attr("name", "count");

    var addCount = $("<button></button>")
        .attr("class", "addCount")
        .text("Set count")
        .click(setLimit);
    var appendLi = $("<li></li>")
        .attr("class", "appendLi");
    var appendEmp = $("<li></li>")
        .attr("class", "appendEmp");
    $(divWrapp).append(countEmp);
    $(divWrapp).append(addCount);
    $(newForm).append(firstName, lastName, salary, position);
    $(addSubmit).appendTo(newForm);
    $("body").append(appendLi);
    $("body").append(appendEmp);
    $(addSubmit).click(addToList);
};

addEmployee();

function setLimit(el) {
    limit = $('.employeeCount').val();
}

function addToList() {
    var user = {
        firstName: $('.employeeFirstName').val(),
        lastName: $('.employeeLastName').val(),
        salary: $('.employeeSalary').val(),
        position: $('.employeePosition').val()
    }

    if (user.firstName == "" || user.lastName == "" || user.salary == "" || user.position == ""){
            alert("You have a some empty field. Please, try again");
            return false; 
    };
    if (listEmp.length > 0) {
        if (listEmp.length >= limit) {
            alert("limit of emp reached");
            return false;
        }

        var sum = 0;
        var isUserExists = false;

        listEmp.forEach(function (el) {
            sum += Number(el.salary);

            if (el.firstName == user.firstName && el.lastName == user.lastName) {
                alert("user " + el.firstName + "  " + el.lastName + " exists ");
                isUserExists = true;
            }
        });

        if (isUserExists) {
            return false;
        }

        var avg = sum / listEmp.length;

        if (avg > 2000) {
            alert('salary limit reached');
            return false;
        }
    }

    listEmp.push(user);
    $('.appendLi').html('Count of employees: ' + listEmp.length);
    $('.appendEmp').html('First name: ' + user.firstName + '<br>Last name: ' + user.lastName + '<br>Salary: ' + user.salary + '<br>Position: ' + user.position);
    console.log(listEmp);
    return false;
};
