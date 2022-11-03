 /* FUNÇÃO PARA GERAR UMA SENHA AUTOMATICAMENTE, RECOMENDAMOS NÃO MUDAR!*/
 const randomPassword = Array(7)
 .fill("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
 .map(x => x[Math.floor(Math.random() * x.length)])
 .join("");
document.querySelector("#password").value = randomPassword;

function removeSpanPassword(event) {
 event.target.type = "password";
 if (document.querySelector("#span-password")) {
   document.querySelector("#span-password").remove();
 }
 return;
}

async function sendData(event) {
 event.preventDefault();
 
 /* PARA EDITAR (AQUI VAI A URL DO SEU SITE) */
 const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

 const name = document.querySelector("#name").value;
 const email = document.querySelector("#email").value;
 const password = document.querySelector("#password").value;
 let whatsapp = document.querySelector("#whatsapp").value.replace(/[()]/g, "").replace("-", "").replace(/\s/g, "");
 console.log(whatsapp);

 /* PARA EDITAR (PARA SABER DE ONDE VEM A CONVERSÃO, adicione um trecho sem espaçamentos ou caracteres especiais) */
 const origin = "PorExemploLeadVindoDoSite";

 const modal = document.querySelector("#modal");
 const modalParagraph = document.querySelector("#modal-paragraph");

 modal.addEventListener("click", event => {
   event.stopPropagation();
   modal.classList.remove("modal-visible");
 });
 document.querySelector("#close-button").addEventListener("click", () => {
   modal.classList.remove("modal-visible");
 });

 switch (true) {
   case email.replace(/\s/g, "") === "" || !email.includes("@"):
     modalParagraph.innerHTML = "Por favor, insira um endereço de email válido!";
     modal.classList.add("modal-visible");
     return;
   case password.replace(/\s/g, "") === "" || password.length <= 6:
     modalParagraph.innerHTML = "Por favor, insira mais de 6 characteres para a senha";
     modal.classList.add("modal-visible");
     return;
   case name.replace(/\s/g, "") === "":
     modalParagraph.innerHTML = "Por favor, insira um nome válido";
     modal.classList.add("modal-visible");
     return;
   default:
     break;
 }

 window.location.href = `${url}`;
}

/* MASCARAS RECOMENDAMOS NÃO MUDAR NADA A PARTIR DESSE PONTO */
function maskDefault(o, f) {
 setTimeout(function () {
   var v = maskPhone(o.value);
   if (v != o.value) {
     o.value = v;
   }
 }, 1);
}

function maskPhone(v) {
 var r = v.replace(/\D/g, "");
 r = r.replace(/^0/, "");
 if (r.length > 10) {
   r = r.replace(/^(\d\d)(\d{1})(\d{4})(\d{4}).*/, "($1) $2 $3-$4");
 } else if (r.length > 5) {
   r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
 } else if (r.length > 2) {
   r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
 } else {
   r = r.replace(/^(\d*)/, "($1");
 }
 return r;
}