addEventListener('DOMContentLoaded', function () {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }

    // Smooth scroll on href to same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // function disableButton() {
    //     const invalidForm = document.querySelector('form:invalid');
    //     const submitBtn = document.getElementById('submit');
    //     const email = document.getElementById('email').value;

    //     validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
    //     if (invalidForm || !validEmail) {
    //       submitBtn.setAttribute('disabled', true);
    //       email.setCustomValidity("Invalid field.");
    //     } else {
    //       submitBtn.disabled = false;
    //       email.setCustomValidity("");
    //     }
    //   }
      
    //   disableButton();
      
    //   const inputs = document.getElementsByTagName("input");
    //   for (let input of inputs) {
    //     input.addEventListener('change', disableButton);
    //   }
});

function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}


// document.getElementById("join-form").addEventListener("submit", function(event) {
//     // Prevent default form submission behavior
//     event.preventDefault();

//     // Send form data using AJAX request
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://hooks.zapier.com/hooks/catch/14919013/3udilyf/", true);
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             // Form data successfully sent, perform any desired actions here
//             console.log("Form data sent successfully to Zapier");
//             // Redirect to homepage or any other desired URL
//             window.location.href = "https://example.com/homepage";
//         }
//     };
//     var formData = new FormData(event.target);
//     var jsonObject = {};
//     formData.forEach(function (value, key) {
//         jsonObject[key] = value;
//     });
//     xhr.send(JSON.stringify(jsonObject));
// });