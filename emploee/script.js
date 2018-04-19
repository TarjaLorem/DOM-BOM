var listEmp = [];
var limit = 10;
var sumEmp = 0;
    //your code here
    var divWrapp = $("<div></div>").attr("class","formWrapp");
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
            .text("Add New emplyee");
     
        var countEmp = $("<input type='text'>")
            .attr("class", "employeeCount")
            .attr("placeholder", "count")
            .attr("name", "count");
     
       var addCount = $("<button></button>")
            .attr("class", "addCount")
            .text("Set count");
     
        $(divWrapp).append(countEmp);
        $(divWrapp).append(addCount);
        $(newForm).append(firstName, lastName, salary, position);
        $(addSubmit).appendTo(newForm);

//        $(addSubmit).click(finish);
 $(function (){
	$('.employeeList').validate({ 
        rules: {
			firstName: {
				required: true,
				minlength: 2,
                maxlength: 10
			},
            lastName: {
				required: true,
                maxlength: 15
            },
            salary: {
                required: true
            },
            position: {
                required: true
            }
		},
		messages: {
			firstName: {
				required: "Please, enter your first name",
				minlength: "So few symbols",
                maxlength: "So many symbols"
			},
            lastName: {
               required: "Please, enter your last name",
               maxlength: "So many symbols"
            },
            salary: {
               required: "Please, enter your salary" 
            },
            position: {
               required: "Please, enter your position" 
            }
		}
        //addEmployee();
    });
 });
 $(addSubmit).click(finish);

 }

 addEmployee();

//var addEmployee = function() {
//    var listEmployee = [''];
//    listEmployee.forEach(function(emp)){
//                         
//    }
// function finish() {
//var user = {
//        firstName: $('.employeeFirstName').val(),
//        lastName: $('.employeeLastName').val(),
//        salary: '$' + $('.employeeSalary').val(),
//        position: $('.employeePosition').val()
//}
//console.log(user.firstName);
//        addEmployee.push(user.firstName +' '+ user.lastName);
//        var Data = [];
//        Data.push(Object.values(user).join(' '));
//        var $list = Data.map(function(item){
//            return '<li>' + item + '</li>';
//        });
//       $($list).appendTo("body");
//};
function finish() {
    var user = {
        firstName: $('.employeeFirstName').val(),
        lastName: $('.employeeLastName').val(),
        salary:  $('.employeeSalary').val(),
        position: $('.employeePosition').val()
    }
    if (listEmp.includes(user.firstName + ' ' + user.lastName)){
        alert("Employee olready exist!");
        return listEmp === null;
    }
//    if (Math.floor(sumEmp/listEmp.length) >= 2000) {
//        alert("error");
//        return user.salary === null;
//    }
    var data = [];
//    sumEmp += parseInt(user.salary.substring(1, user.salary.length));
    listEmp.push(user.firstName +' '+ user.lastName);
    data.push(Object.values(user).join(' '));
    console.log(data);
    var li = '<li>' + data + '</li>';
    $('body').append(li)
//    
//    var arr = [];
//    arr.push(Object.values(user.salary).join(' '));
//    reduce = arr.reduce(function(num) {
//        return num+=num;
//            console.log(data);
//
//    } )
//    
//    res = reduce/arr.length-1;
//    return res;
//    var lis = '<span>' + res + '</span>';
//    $("body").append(lis);

    };
$('.employeesNumber').html('кількість працівників: ' + listEmp.length);

    //$('.employeesNumber').html('кількість працівників: ' + listOfEmployees.length);


