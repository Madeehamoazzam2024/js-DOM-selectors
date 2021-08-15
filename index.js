console.log(document);
console.log(document.title);
document.title="learning DOM!!";
console.log(document.title);

const heading = document.getElementById("Helloaccess");
console.log(heading);

const head = document.querySelectorAll("p")
console.log(head);

const head1 = document.getElementsByTagName("h3")
console.log(head1);

const head2 = document.getElementsByClassName("second")
console.log(head2);

const header = document.querySelector("h1")
console.log(header)
