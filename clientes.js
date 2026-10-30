document.addEventListener('DOMContentLoaded', () => {

    const listaClientes = document.getElementById('lista-clientes')

    //Recupera os clientes salvos
    const clientes = JSON.parse(localStorage.getItem('clientes')) || []

    // Se não houver clientes, exibe uma mensagem
    if (clientes.lenght === 0) {
        listaClientes.innerHTML = `<li>Nenhum cliente cadastrado.</li>`
}

    //Percorre a lista de clientes já cadastrados.
    clientes.forEach(cliente => {
        const li = document.createElement ('li')
        li.innerHTML = `
            <strong>Nome: </strong> ${cliente.nome} <br>
            <strong>Email:</strong> ${cliente.email} <br>
            <strong>Telefone:</strong> ${cliente.telefone}
        `
        // Cria na página de clientes.html os espaços necesssários para exibir os dados de cada cliente cadastrado.
        listaClientes.appendChild(li)
    });
})