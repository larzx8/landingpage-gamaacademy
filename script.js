function saveForm() {    
    let email = document.getElementById('e-mail').value;
    let nome = document.getElementById('nome').value;
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("nome", JSON.stringify(nome));
    
    if (document.getElementById('e-mail').value != "") {        
        document.getElementById("newsletter").innerHTML = "E-mail cadastrado com sucesso!";
    }
    else {
        document.getElementById("newsletter").innerHTML = "Por favor, preencher com o seu e-mail.";
    }
}