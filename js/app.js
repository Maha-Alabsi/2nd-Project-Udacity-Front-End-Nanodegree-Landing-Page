//Start Js code after the DOM content is loaded
window.addEventListener("DOMContentLoaded", function () {

    'use strict';
    const headerdiv = document.getElementById('headerdiv');
    const navigation = document.createElement("nav");
    const unorderlist = document.createElement("ul");  
    let createlistitem;
    let createAnchor;
    let anchorAttribute;
    const sections = Array.from(document.getElementsByTagName("section"));
    const scrollTotop = document.querySelector('#btnscrolltotop');

//scroll to top
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 50) {
            scrollTotop.style.display = "block";
        } else {
            scrollTotop.style.display = "none";
        }
    });
    scrollTotop.addEventListener('click', function () {
    window.scrollTo(0,0);
    });

//Add nav at the top of the header
    headerdiv.insertBefore(navigation, headerdiv.firstChild);
//Add ul to the nav
    navigation.appendChild(unorderlist);
//Add li to the ul 
    for (let i = 0; i < sections.length ; i++){
        createlistitem = document.createElement("li");
        //create a element
        createAnchor = document.createElement("a");
        //create data-link attribute
        anchorAttribute = document.createAttribute("data-link");
        //assigne the data-link value
        anchorAttribute.value = sections[i].id; 
        // add data-link to the a element s
        createAnchor.setAttributeNode(anchorAttribute);
        createlistitem.appendChild(createAnchor);
        createAnchor.appendChild(document.createTextNode(sections[i].id));
        unorderlist.appendChild(createlistitem);
    }
//Activation of the clicked item of the navbar & linked each navbar item with its section & activation of the section in view.
    
    const anchor = document.getElementsByTagName('a');
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener('click', function (e) {
            e.preventDefault();
                const getsection = document.getElementById(anchor[i].getAttribute('data-link'));
                getsection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
                this.classList.add('active');

//Activation of the active class to the section
            
            const position = getsection.getBoundingClientRect();
            window.addEventListener("scroll", function (e) {
                e.preventDefault();
                    if (position.top >= 0 && position.bottom >= window.innerHeight) {
                        (document.querySelector('.active-section')) ? document.querySelector('.active-section').classList.remove('active-section') : '';
                        sections[i].classList.add('active-section');
                    }
                });
            });
        }
}, false);




