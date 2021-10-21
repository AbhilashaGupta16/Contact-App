console.log("Welcome");
var html = ""

document.getElementById("newForm").addEventListener("click", addForm)

function addForm() {
  html = `<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Add a New Contact</a>
      <a href="/html/index.html"><button type="button" class="btn btn-light">Back to Home Page</button></a>
    </div>
  </nav>
  <!-- <h1>My Contacts</h1> -->
  <main class="form-signin">
    <form>
      <h1 style="text-align: center;" class="h3 mb-3 fw-normal">Please fill in the details</h1>

      <div class="form-floating">
        <input type="text" class="form-control" id="username" placeholder="Abhilasha Gupta" required>
        <label for="floatingName">Name</label>
      </div>
      <div class="form-floating">
        <input type="email" class="form-control" id="useremail" placeholder="name@example.com" required>
        <label for="floatingEmail">Email address</label>
      </div>
      <div class="form-floating">
        <input type="tel" class="form-control" id="userphone" placeholder="Phone Number" required>
        <label for="floatingPhone" pattern="[0-9]{10}" aria-required="true">Phone Number</label>
      </div>

      <div class="checkbox mb-1">
      </div>
      <button id="submit" class="w-100 btn btn-lg btn-primary" type="submit" onclick="submit()">Submit Form</button>
      <p style="text-align: center;" class="mt-3 mb-3 text-muted">SpiderWeb &copy; 2017–2021</p>
    </form>
  </main>`
  document.getElementById("my-header").innerHTML = html

}


console.log("Welcome");
showTasks()

let addbtn = document.getElementById("submit");
// let contactList = document.getElementsById("my-contacts")

if (addbtn) {
    console.log("yes")
    addbtn.addEventListener("click", function (event) {

        // Local Storage for Names 
        let newname = document.getElementById("username");
        let contactNames = localStorage.getItem("contact-usernames")
        if (contactNames == null) {
            namesObj = []
        }
        else {
            namesObj = JSON.parse(contactNames)
        }
        namesObj.push(newname.value)
        localStorage.setItem("contact-usernames", JSON.stringify(namesObj))
        showTasks()

        // Local Storage for Emails
        let newemail=document.getElementById("useremail");
        let contactEmails=localStorage.getItem("contact-emails")
        if(contactEmails == null){
            emailsObj=[]
        }
        else{
            emailsObj = JSON.parse(contactEmails)
        }    
        emailsObj.push(newemail.value)
        localStorage.setItem("contact-emails",JSON.stringify(emailsObj))
        newemail=""

        // Local Storage for Phone Numbers
        let newphone=document.getElementById("userphone");
        let contactPhones=localStorage.getItem("contact-phones")
        if(contactPhones == null){
            phonesObj=[]
        }
        else{
            phonesObj = JSON.parse(contactPhones)
        }    
        phonesObj.push(newphone.value)
        localStorage.setItem("contact-phones",JSON.stringify(phonesObj))
        newphone=""    

    })
}


function showTasks() {
    let html = ''
    let contactNames = localStorage.getItem("contact-usernames")
    if (contactNames == null) {
        namesObj = []
    }
    else {
        namesObj = JSON.parse(contactNames)
    }
    namesObj.forEach(function (element, index) {
        html += `<li class="d-flex flex-row">
        <div class="contact-details d-flex flex-row">
            <div class="contact-details-item" id="name">
                <p id="username">${element}</p>
            </div>
            <div class="contact-details-item" id="email">
                ${index++}barryallen@gmail.com
            </div>
            <div class="contact-details-item" id="phone">
                9876543210
            </div>
        </div>
        <span class="span-phone bg-success"><i class="fa fa-phone"></i></span>
        <span class="span-trash"><i class="fa fa-trash"></i></span>
    </li>`;
    })
    document.getElementById("myContacts").innerHTML = html;
}
