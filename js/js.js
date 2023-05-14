//start loading
let loading = document.getElementsByClassName("cont-loading")[0];
window.onload = () => {
    document.body.style.overflowY = "auto";
    loading.style.display = "none";
}
//end loading
//start scroll
let scroll = document.getElementsByClassName("scroll")[0];
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrollTop = document.documentElement.scrollTop;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroll.style.width = `${(scrollTop / height)* 100}%`
})
//end scroll
//start close nav & start arrow-up
let nav     = document.getElementsByClassName("nav")[0]; 
let closeNav= document.getElementsByClassName("close-nav")[0];
let span    = document.querySelectorAll(".close-nav span");
let arrow   = document.getElementsByClassName("arrow-up")[0];
let sections= document.querySelectorAll(".section");
let boxSer  = document.querySelectorAll(".services .box-ser");
let boxSkill  = document.querySelectorAll(".skills .box");
let boxPro  = document.querySelectorAll(".projects .box");
closeNav.addEventListener("click" ,() =>{
    closeNav.classList.toggle("active");
    nav.classList.toggle("move-nav");
})
window.onscroll = function() {
    let scrollPos = document.documentElement.scrollTop;
    sections.forEach( section => {
        if(scrollPos >= section.offsetTop - section.offsetHeight * 0.25 && scrollPos < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25 ){
            let currentId = section.attributes.id.value;
            removeAllActive();
            addActiveClass(currentId);
            if(currentId == "home") {
                document.querySelector(".home .identification").classList.add("scroll-show");
            } else {
                document.querySelector(".home .identification").classList.remove("scroll-show");
            }
            if(currentId == "about") {
                document.querySelector(".about h1").classList.add("scroll-show");
                document.querySelector(".about p").classList.add("scroll-show")
            } else {
                document.querySelector(".about h1").classList.remove("scroll-show");
                document.querySelector(".about p").classList.remove("scroll-show")
            }
            if(currentId == "services") {
                boxSer.forEach(e => e.classList.add("scroll-show"));
                document.querySelector(".services h1").classList.add("scroll-show");
            } else {
                boxSer.forEach(e => e.classList.remove("scroll-show"));
                document.querySelector(".services h1").classList.remove("scroll-show");
            }
            if(currentId == "skills") {
                boxSkill.forEach(e => e.classList.add("scroll-show"));
                document.querySelector(".skills h1").classList.add("scroll-show");
            } else {
                boxSkill.forEach(e => e.classList.remove("scroll-show"));
                document.querySelector(".skills h1").classList.remove("scroll-show");
            }
            if(currentId == "projects") {
                boxPro.forEach(e => e.classList.add("scroll-show"));
                document.querySelector(".projects h1").classList.add("scroll-show");
            } else {
                boxPro.forEach(e => e.classList.remove("scroll-show"));
                document.querySelector(".projects h1").classList.remove("scroll-show");
            }
            if(currentId == "contact") {
                document.querySelector(".contact-footer form").classList.add("scroll-show");
                document.querySelector(".contact-footer h1").classList.add("scroll-show");
                document.querySelector(".contact-footer i").classList.add("scroll-show");
                document.querySelector(".contact-footer p").classList.add("scroll-show");
            } else {
                document.querySelector(".contact-footer form").classList.remove("scroll-show");
                document.querySelector(".contact-footer h1").classList.remove("scroll-show");
                document.querySelector(".contact-footer i").classList.remove("scroll-show");
                document.querySelector(".contact-footer p").classList.remove("scroll-show");
            }
        }
    })
     sections.forEach( section => {
        if(scrollPos >= section.offsetTop - section.offsetHeight * 0.03 && scrollPos < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.03 ){
            let currentId = section.attributes.id.value;
            if (currentId == "skills" || currentId == "about") {
                span.forEach(e => e.classList.add("color"))
            } else {
                span.forEach(e => e.classList.remove("color"));
            }
        }
     });
    //nav animation
    window.scrollY > 50 ? nav.classList.add("back-nav"): nav.classList.remove("back-nav");
    //arrow up animation
    window.scrollY >= 500?arrow.classList.add("show-up"): arrow.classList.remove("show-up");
}
function removeAllActive() {
    let links   = document.querySelectorAll(".nav ul li a").forEach(el => {
        el.classList.remove("active")
    })
}
function addActiveClass(currentId) {
    let selector = `nav ul li a[href="#${currentId}"]`
    document.querySelector(selector).classList.add("active");
}
arrow.addEventListener('click',()=> scrollUp())
let logo =document.getElementsByClassName("logo")[0];
logo.addEventListener('click',()=> scrollUp())
function scrollUp(){
     window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
//end arrow-up
//links nav
//let links   = document.querySelectorAll("nav ul li a");
//links.forEach((link) => {
//    link.addEventListener("click", (e) => {
//        e.preventDefault();
//        let currentId = e.target.attributes.href.value;
//        let section = document.querySelector(currentId);
//        section.scrollIntoView({
//            behavior:"smooth",
//        })
//    }) 
//})
// start typing home


const contactForm = document.getElementById('my-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactPhone = document.getElementById('contact-hone'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-message')

        const sendEmail = (e) => {
          e.preventDefault();

          if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {

            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')

            contactMessage.textContent = "You Are Missing Something 😅"
          } else {
            emailjs.sendForm('service_xocj1kq','template_wh5bd8i','#my-form', '5Shs-dwC8v4no8pOo')
            .then(() => {
              contactMessage.classList.add('color-blue')
              contactMessage.textContent = 'Message Sent ✅'
              setTimeout(() => {
                contactMessage.textContent = ''
              }, 3000)
            }, (error) => {
              alert('OOPS! SOMETHING WENT WRONG...', error)
            })
            setTimeout(() => {
              contactName.value = ''
              contactEmail.value = ''
              contactProject.value = ''
            }, 3000)
          }
        }
        contactForm.addEventListener('submit', sendEmail)




let typeTextSpan    = document.getElementsByClassName("text-typing")[0],
    cursor          = document.getElementsByClassName("cursor")[0],
    textArray       = ["front-end developer" , "Edu. tech. specialist"],
    typingDelay     = 200,
    erasingDelay    = 100,
    newTextDelay    = 2000,
    textArrayIndex  = 0,
    charIndex       = 0;
function type(){
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typeTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    } else {
        cursor.classList.remove("typing");
        setTimeout(erase,newTextDelay);
    }
}
function erase(){
    if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typeTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    } else {
        cursor.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type,typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded",() => {
    if(textArray.length) setTimeout(type,newTextDelay + 250);
})
// end typing home

// start email
// let mess = document.getElementsByClassName("message-contact")[0];
// function sendEmail() {
//     Email.send({
//         SecureToken : "c3ebef4b-e9a1-4f27-99e3-aa2b18d93a23",
//         To : 'osamasalehdev@gmail.com',
//         From : "osamasalehdev@gmail.com",
//         Subject : "New message",
//         Body :  "Name : " + document.getElementById("name").value +
//                 "<br> Email : " + document.getElementById("email").value +
//                 "<br> Phone : " + document.getElementById("phone").value +
//                 "<br> Message : " + document.getElementById("message").value 
//     }).then(
//         message => {
//             mess.style.display = "block";
//             if ( message === "OK") {
//                 mess.innerHTML = "Your message was sent successfully .";
//             } else {
//                 mess.innerHTML = message;
//             }
//             setTimeout(() => {
//                 mess.style.display = "none"
//             } , 5000)
//         }
//     );
// }
// //footer
// function send () {
//     const email = document.getElementById('E-mail');
//     email.onsubmit = window.open('mailto:salahyouniswc@gmail.com?subject=subject&body=body')
// }
// let spanDate = document.getElementsByClassName("date")[0];
// let date = new Date();
// spanDate.innerHTML = date.getFullYear();

// // 