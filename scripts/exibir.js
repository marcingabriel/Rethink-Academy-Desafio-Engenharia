//Funcao para printar os cadastros realizados
function enviar() {
    var nome = document.querySelector("#name").value;
    var career = document.querySelector("#career").value;
    var age = document.querySelector("#age").value;
    var email = document.querySelector("#email").value;
    var date = document.querySelector("#date").value;
    var phone = document.querySelector("#tel").value;

    var exibir = document.createElement("exibir");

    exibir.innerHTML = `

            
            <td><strong>Nome:</strong> ${nome}</td><br>

            <td><strong>Idade:</strong> ${age}</td><br>

            <td><strong>Profissão:</strong> ${career}</td><br>

            <td><strong>Email:</strong> ${email}</td><br>

            <td><strong>Telefone:</strong> ${phone}</td><br>
            <td><strong>Data de Preenchimento:</strong> ${date}</td><br><br>
          
`;
    document.getElementById("tabela").appendChild(exibir);

}