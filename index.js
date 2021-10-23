console.log("Welcome");

// showTasks()
countContacts()

let addbtn = document.getElementById("submit");

// let contactList = document.getElementsById("my-contacts")

if (addbtn) {
    
    addbtn.addEventListener("click", function (event) {
        // console.log("yes")
        // Local Storage for Names 
        let newname = document.getElementById("username");
        let contactNames = localStorage.getItem("contact-usernames")
        if (contactNames == null) {
            namesObj = []
        }
        else {
            namesObj = JSON.parse(contactNames)
        }

        // Local Storage for Emails
        let newemail = document.getElementById("useremail");
        let contactEmails=localStorage.getItem("contact-emails")
        if(contactEmails == null){
            emailsObj=[]
        }
        else{
            emailsObj = JSON.parse(contactEmails)
        }      

        // Local Storage for Phone Numbers
        let newphone = document.getElementById("userphone");
        let contactPhones=localStorage.getItem("contact-phones")
        if(contactPhones == null){
            phonesObj=[]
        }
        else{
            phonesObj = JSON.parse(contactPhones)
        }    
        
        if(newname.value!="" && newemail.value!="" && newphone.value!="" )
        {

            namesObj.push(newname.value)
            localStorage.setItem("contact-usernames", JSON.stringify(namesObj))
            newname=""

            emailsObj.push(newemail.value)
            localStorage.setItem("contact-emails",JSON.stringify(emailsObj))
            newemail=""

            phonesObj.push(newphone.value)
            localStorage.setItem("contact-phones",JSON.stringify(phonesObj))  
            newphone=""  

        html_success=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle text-success" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
        <strong>New Contact Added.</strong> Please go to See All Contacts Page to check it out.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        
        document.getElementById("popup").innerHTML=html_success

        document.getElementById("username").value=""
        document.getElementById("useremail").value=""
        document.getElementById("userphone").value=""

        countContacts()

        }
        else{
            html_failure=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill text-danger" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        <strong>Couldnt Add New Contact.</strong> Please fill up all the fields and try again.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        
        document.getElementById("popup").innerHTML=html_failure 
        }
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

    let contactEmails = localStorage.getItem("contact-emails")
    if(contactEmails == null){
        emailsObj=[]
    }
    else{
        emailsObj = JSON.parse(contactEmails)
    } 

    let contactPhones=localStorage.getItem("contact-phones")
    if(contactPhones == null){
        phonesObj=[]
    }
    else{
        phonesObj = JSON.parse(contactPhones)
    }  
    // console.log(namesObj.length)
    for(var i=0;i<namesObj.length;i++){
    // namesObj.forEach(function (element, index) {
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
        <span class="span-phone bg-success"><i class="fa fa-phone"></i></span>
        <span onclick="deleteTask(${i})" class="span-trash"><i class="fa fa-trash"></i></span>
    </li>`;
    }
    document.getElementById("myContacts-2").innerHTML = html;
    countContacts()
}

function deleteTask(index){
    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)
    namesObj.splice(index,1)
    localStorage.setItem("contact-usernames", JSON.stringify(namesObj))

    let contactEmails=localStorage.getItem("contact-emails")
    emailsObj = JSON.parse(contactEmails)
    emailsObj.splice(index,1)
    localStorage.setItem("contact-emails", JSON.stringify(emailsObj))

    let contactPhones=localStorage.getItem("contact-phones")
    phonesObj = JSON.parse(contactPhones)
    phonesObj.splice(index,1)
    localStorage.setItem("contact-phones", JSON.stringify(phonesObj))

    // showTasks()
    countContacts()
}

function countContacts(){
    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)
    document.getElementById("newForm").innerHTML=(namesObj.length)+" Contacts"
}
