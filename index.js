console.log(document);
console.log(document.title);
document.title="learning DOM!!";
console.log(document.title);

//getElementById

const heading = document.getElementById("Helloaccess");
console.log(heading);

//querySelectorAll

const head = document.querySelectorAll("p")
console.log(head);

//getElementByName

const head1 = document.getElementsByTagName("h3")
console.log(head1);

//getElementsByClassName

const head2 = document.getElementsByClassName("second")
console.log(head2);

//querySelector

const header = document.querySelector("h1")
console.log(header)
