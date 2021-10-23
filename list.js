// console.log("Welcome")

showTasks()

var editIndex = -1

function showTasks() {
    let html = ''
    let contactNames = localStorage.getItem("contact-usernames")
    if (contactNames == null) {
        namesObj = []
    }
    else {
        namesObj = JSON.parse(contactNames)
    }

    let contactEmails = localStorage.getItem("contact-emails")
    if (contactEmails == null) {
        emailsObj = []
    }
    else {
        emailsObj = JSON.parse(contactEmails)
    }

    let contactPhones = localStorage.getItem("contact-phones")
    if (contactPhones == null) {
        phonesObj = []
    }
    else {
        phonesObj = JSON.parse(contactPhones)
    }
    // console.log(namesObj.length)
    for (var i = 0; i < namesObj.length; i++) {
        // namesObj.forEach(function (element, index) {
        html += `<li class="d-flex flex-row">
        <div class="contact-details d-flex flex-row">
            ${i + 1}.
            <div class="contact-details-item" id="name">
                ${namesObj[i]}
            </div>
            <div class="contact-details-item" id="email">
                ${emailsObj[i]}
            </div>
            <div class="contact-details-item" id="phone">
                ${phonesObj[i]}
            </div>
        </div>
        <a onclick="editTask(${i})"><span class="span-pencil bg-primary"><i class="fa fa-pencil"></i></span></a>
        <a href="tel:${phonesObj[i]}"><span class="span-phone bg-success"><i class="fa fa-phone"></i></span></a>
        <span onclick="deleteTask(${i})" class="span-trash"><i class="fa fa-trash"></i></span>
    </li>`;
    }
    document.getElementById("myContacts-2").innerHTML = html;

    countContacts()

    // location.reload()
    // document.getElementById("my-form").reload();
}

function deleteTask(index) {
    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)
    namesObj.splice(index, 1)
    localStorage.setItem("contact-usernames", JSON.stringify(namesObj))

    let contactEmails = localStorage.getItem("contact-emails")
    emailsObj = JSON.parse(contactEmails)
    emailsObj.splice(index, 1)
    localStorage.setItem("contact-emails", JSON.stringify(emailsObj))

    let contactPhones = localStorage.getItem("contact-phones")
    phonesObj = JSON.parse(contactPhones)
    phonesObj.splice(index, 1)
    localStorage.setItem("contact-phones", JSON.stringify(phonesObj))

    showTasks()
    countContacts()
}

function countContacts() {
    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)
    document.getElementById("newForm").innerHTML = (namesObj.length) + " Contacts Now"

}

function search() {
    let f = 0
    // console.log("Hii")
    var searchTxt = document.getElementById("searchTxt").value
    console.log(searchTxt)

    let html = ''
    let contactNames = localStorage.getItem("contact-usernames")
    if (contactNames == null) {
        namesObj = []
    }
    else {
        namesObj = JSON.parse(contactNames)
    }

    let contactEmails = localStorage.getItem("contact-emails")
    if (contactEmails == null) {
        emailsObj = []
    }
    else {
        emailsObj = JSON.parse(contactEmails)
    }

    let contactPhones = localStorage.getItem("contact-phones")
    if (contactPhones == null) {
        phonesObj = []
    }
    else {
        phonesObj = JSON.parse(contactPhones)
    }

    // console.log(namesObj.length)
    for (var i = 0; i < namesObj.length; i++) {

        if (searchTxt.toUpperCase() == namesObj[i].toUpperCase()) {
            f = 1
            html += `<li class="d-flex flex-row">
        <div class="contact-details d-flex flex-row">
            <div class="contact-details-item" id="name">
                ${namesObj[i]}
            </div>
            <div class="contact-details-item" id="email">
                ${emailsObj[i]}
            </div>
            <div class="contact-details-item" id="phone">
                ${phonesObj[i]}
            </div>
        </div>
        <a onclick="editTask(${i})"><span class="span-pencil bg-primary"><i class="fa fa-pencil"></i></span></a>
        <span class="span-phone bg-success"><i class="fa fa-phone"></i></span>
        <span onclick="deleteTask(${i})" class="span-trash"><i class="fa fa-trash"></i></span>
    </li>`;

            document.getElementById("myContacts-2").innerHTML = html;
            countContacts()

        }
    }
    if (f == 0) {
        document.getElementById("myContacts-2").innerHTML = "No such contact found"
    }
}

function editTask(i) {
    console.log("Edit Mode On")
    editIndex = i

    html = `<nav class="navbar navbar-main navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
        <i class="nav-icon fa fa-book"></i>
        <a class="navbar-brand" href="list.html">My Contacts</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!-- <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li> -->
            </ul>
            <form class="d-flex">
                <a href="list.html"><button type="button"
                        class="btn btn-outline-success login-navbar-btn">See All Contacts</button></a>
            </form>
        </div>
    </div>
</nav>

<div id="my-form" class="inputField" style="text-align: center;">
    <h1 class="h3 mb-3 fw-normal">Add New Contact</h1>
    <!-- <p>Please fill the details to add a new contact.</p> -->
    <div class="col-12 form-group">
        <input type="text" class="form-control inputForm" placeholder="First Name" aria-label="First Name"
            required id="username">
    </div>
    <div class="col-12 form-group">
        <input type="email" class="form-control inputForm" placeholder="Email" aria-label="email" required
            id="useremail">
    </div>
    <div class="col-12 form-group">
        <input type="tel" class="form-control inputForm" placeholder="Phone" aria-label="email" required
            id="userphone">
    </div>
        <button  onclick="editTaskBtn()" class="w-50 btn btn-lg btn-success footer-btn" type="submit" id="submit">Confirm Edit</button>
</div>`

    document.getElementById("my-header").innerHTML = html

    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)

    let contactEmails = localStorage.getItem("contact-emails")
    emailsObj = JSON.parse(contactEmails)

    let contactPhones = localStorage.getItem("contact-phones")
    phonesObj = JSON.parse(contactPhones)

    document.getElementById("username").value = namesObj[i]
    document.getElementById("useremail").value = emailsObj[i]
    document.getElementById("userphone").value = phonesObj[i]

}

function editTaskBtn() {
    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)

    let contactEmails = localStorage.getItem("contact-emails")
    emailsObj = JSON.parse(contactEmails)

    let contactPhones = localStorage.getItem("contact-phones")
    phonesObj = JSON.parse(contactPhones)

    newname = document.getElementById("username")
    newemail = document.getElementById("useremail")
    newphone = document.getElementById("userphone")

    if (newname.value != "" && newemail.value != "" && newphone.value != "") {
        namesObj.push(newname.value)
        localStorage.setItem("contact-usernames", JSON.stringify(namesObj))
        newname = ""

        emailsObj.push(newemail.value)
        localStorage.setItem("contact-emails", JSON.stringify(emailsObj))
        newemail = ""

        phonesObj.push(newphone.value)
        localStorage.setItem("contact-phones", JSON.stringify(phonesObj))
        newphone = ""

        html_success = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle text-success" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
        <strong>Contact Details Successfully Edited.</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

        document.getElementById("popup").innerHTML = html_success
        deleteTask(editIndex)
    }
    else {
        html_failure = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill text-danger" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        <strong>Couldnt update contact details.</strong> Please fill up all the fields and try again.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`

        document.getElementById("popup").innerHTML = html_failure
    }

}
