let divElement = document.createElement('div');
divElement.id="container";
document.body.appendChild(divElement);

let h1Element = document.createElement('h1');
h1Element.textContent = "Web Development";
container.appendChild(h1Element);

let btnElement = document.createElement('button');
btnElement.textContent = "Change Heading And add styles";
container.appendChild(btnElement);

btnElement.onclick = function(){
    h1Element.textContent = "MERN Stack";
    h1Element.classList.add("heading");
}


let rmvElement = document.createElement('button');
rmvElement.textContent = "Remove Styles";
rmvElement.onclick = function(){
    h1Element.classList.remove("heading");
}
container.appendChild(rmvElement);