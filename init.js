window.onload = function () {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnameName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerHTML = initPerson.birthYear;
    document.getElementById('fotoOutput').innerHTML = initPerson.foto;
    document.getElementById('proffOutput').innerText = initPerson.proff;
};

genButton = function () { 
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surnameName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerHTML = initPerson.birthYear;
    document.getElementById('fotoOutput').innerHTML = initPerson.foto;
    document.getElementById('proffOutput').innerText = initPerson.proff;
};

clearButton = function () { 
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('patronymicOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('fotoOutput').innerText =  "";
    document.getElementById('proffOutput').innerText =  "";
};