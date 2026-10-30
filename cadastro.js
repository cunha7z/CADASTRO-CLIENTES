function funcaoCadastrarCliente() {
    //Identificar os campos no HTML e pega os valores.
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    //Verifica se os campos estão vazios
    //Mostra um alerta caso algum campo esteja vazio e não permite o cadastro.
    if (!nome  || !email  || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    //Cria uma variavel com os dados do novo cliente.
    const novoCliente = {nome, email, telefone};

    // Pega a lista de clientes do localStorage, se não existir, cria uma lista vazia.
    let listaClientes = JSON.parse(localStorage.getItem("clientes")) || [];

    //Adiciona o novo cliente à lista de clientes e salva no localStorage.
    listaClientes.push(novoCliente);

    localStorage.setItem("clientes", JSON.stringify(listaClientes));
    
    // Mensagem de sucesso para o usuário.
    alert("Cliente cadastrado com sucesso!");

    document.getElementById('formulario-cadastro').reset();
    
}

