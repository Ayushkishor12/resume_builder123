function addNewWefield() {
    console.log("adding new field");

    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('weField');
    newnode.classList.add('mt-3');
    newnode.setAttribute('rows', 3);
    newnode.setAttribute('placeholder', 'enter here');
    let weOb = document.getElementById('we');
    weOb.appendChild(newnode);
}

function addNewAqField() {
    console.log("adding new field");

    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('eqField');
    newnode.classList.add('mt-3');
    newnode.setAttribute('rows', 3);
    newnode.setAttribute('placeholder', 'enter here');
    let aqOb = document.getElementById('aq');
    aqOb.appendChild(newnode);
}

function generatecv(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("AdressField").value;

    document.getElementById("facebookT").innerHTML = `<a href="${document.getElementById("fbField").value}">${document.getElementById("fbField").value}</a>`;
    document.getElementById("instaT").innerHTML = `<a href="${document.getElementById("instaField").value}">${document.getElementById("instaField").value}</a>`;
    document.getElementById("linkdinT").innerHTML = `<a href="${document.getElementById("linkdinField").value}">${document.getElementById("linkdinField").value}</a>`;

    document.getElementById("objectiveT").innerHTML = document.getElementById("obfield").value;

    let wes = document.querySelectorAll('.weField');
    let str = '';
    for(let e of wes){
        str += `<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML = str;

    let aes = document.querySelectorAll('.eqField');
    let str1 = '';
    for(let e of aes){
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    document.getElementById("cv_form").style.display = "none";
    document.getElementById("cv_template").style.display = "block";
}

function printCV() {
    window.print();
}
