// console.log("Welcome")

showTasks()

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
            ${i+1}.
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
    document.getElementById("newForm").innerHTML = (namesObj.length ) + " Contacts Now"

}

function search() {
    let f=0
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
            f=1
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

            document.getElementById("myContacts-2").innerHTML = html;
            countContacts()

        }
    }
    if(f==0){
        document.getElementById("myContacts-2").innerHTML = "No such contact found"
    }


}

