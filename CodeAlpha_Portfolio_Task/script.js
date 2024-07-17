
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "", "Graphic Designer", "", "Freelancer", "", "Dancer", "", "UI/UX Designer"],
    typeSpeed: 80,
    backSpeed: 30,
    loop: true
});



// ============================= about ===========================

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



// ==================================== form ===============================

document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw6f0Tdn_fUW8UYT6lrIslhqKgrHHSLPgEbEyqsTnM6PQuN90NWi5IGAztXUQLSTIIEeQ/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        const name = form['Name'].value.trim();
        const email = form['Email'].value.trim();
        const message = form['Message'].value.trim();

        const namePattern = /^[a-zA-Z\s]+$/;
        // Updated email pattern to match your new requirements
        const emailPattern = /^[a-z0-9]+(?:[._%+-][a-z0-9]+)*@gmail\.com$/;

        if (!namePattern.test(name)) {
            alert('Name should only contain letters and spaces, no special characters or numbers.');
            return false;
        }

        if (!emailPattern.test(email)) {
            alert('Email should only contain lowercase letters, numbers, no consecutive special characters, and end with @gmail.com.');
            return false;
        }

        if (message === '') {
            alert('Message cannot be empty.');
            return false;
        }

        // If validation passes, submit the form using fetch
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function(){
                    msg.innerHTML = "";
                }, 2000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
});


