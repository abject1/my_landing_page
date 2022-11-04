"use strict";

const btnMail = document.getElementById("mail");
const btnPhone = document.getElementById("phone");
btnMail.addEventListener('click', () => {
  Swal.fire("Contactez moi par mail : \n lucaswurtz0@gmail.com \n inifni.ligne.developpement@gmail.com");
});
btnPhone.addEventListener('click', () => {
  Swal.fire("Contactez moi par téléphone : \n 06.45.11.17.72");
});