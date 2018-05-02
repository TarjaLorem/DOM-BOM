function createForm() {
    let form = document.createElement('form');
        form.setAttribute("name", "login");
        form.setAttribute("class", "main-form");

    let first = '<input type="text" name="age" placeholder="age" >';
    let second = '<input type="text" name="username" placeholder="username" >';
    let third = '<input type="text" name="date" placeholder="date" >';
    let submit = '<input type="submit" value="Validate" class="add-validate">';

    document.body.appendChild(form);
    form.insertAdjacentHTML('afterbegin', first);
    form.insertAdjacentHTML('beforeend', second);
    form.insertAdjacentHTML('beforeend', third);
    form.insertAdjacentHTML('beforeend', submit);

    document.querySelector('.add-validate').addEventListener("click", validation); 
}
createForm();

function validation() {
    let age = document.getElementsByName("age")[0].value;
    if (age < 0 || age.includes(' ') || !Number.isInteger(parseInt(age))) {
        alert("input age is not valid");
    }else if (age == 0 || age >= Math.pow(10,5)) {
        alert("input age is not valid"); 
    };
    
    let username = document.getElementsByName("username")[0].value;
    if (username.substring(0,4) != "user") {
        alert("input username is not valid");
    }
    let date = document.getElementsByName("date")[0].value;
    let today = new Date(); 
    let mm = ((today.getMonth()+1) < 10)? '0' + (today.getMonth()+1) : (today.getMonth()+1);
    let current = today.getDate() + '/' + mm + '/' + today.getFullYear();
    if (date !== current) {
        alert("input date is not valid")
    }
}
