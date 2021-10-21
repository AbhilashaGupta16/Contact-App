console.log("Welcome");

showTasks()
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
        if(newname.value!=""){
            namesObj.push(newname.value)
            localStorage.setItem("contact-usernames", JSON.stringify(namesObj))
            newname=""
        }
        else{
            alert("Enter Name")
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
        if(newemail.value!="")  {
            emailsObj.push(newemail.value)
            localStorage.setItem("contact-emails",JSON.stringify(emailsObj))
            newemail=""
        }
        else{
            alert("Enter Email")
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
        if(newphone.value!=""){
            phonesObj.push(newphone.value)
            localStorage.setItem("contact-phones",JSON.stringify(phonesObj))  
            newphone=""  
        }
        else{
            alert("Enter Phone Number")
        }
        

        showTasks()
        countContacts()
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

    // location.reload()
    // document.getElementById("my-form").reload();
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

    showTasks()
    countContacts()
}

// function deleteAll(){
    // if (confirm("Are you sure, you want to delete all contacts ?")) {
    //     var list=[]
    //     localStorage.setItem("contact-usernames",JSON.stringify(list))
    //     localStorage.setItem("contact-emails",JSON.stringify(list))
    //     localStorage.setItem("contact-phones",JSON.stringify(list))
        
    //     showTasks()
    //     countContacts()
    // } else {
    //     txt = "All Contact Remains";
    // }
// }

function countContacts(){
    let contactNames = localStorage.getItem("contact-usernames")
    namesObj = JSON.parse(contactNames)
    document.getElementById("newForm").innerHTML=(namesObj.length+2)+" Contacts"
    
}

function search(){
    // console.log("Hii")
    var searchTxt=document.getElementById("searchTxt").value
    console.log(searchTxt)
}

