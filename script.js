document.getElementById('treinoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const objetivo = document.getElementById('objetivo').value;
    const tempo = document.getElementById('tempo').value;
    const historico = document.getElementById('historico').value;
    const descricao = document.getElementById('descricao').value;

    // Validação básica
    if (!nome || !data) {
        document.getElementById('mensagem').textContent = 'Por favor, preencha todos os campos obrigatórios.';
        return;
    }

    // Exibe os dados no console (para teste)
    console.log('Nome:', nome);
    console.log('Data:', data);
    console.log('Objetivo:', objetivo);
    console.log('Tempo:', tempo);
    console.log('Histórico:', historico);
    console.log('Descrição:', descricao);

    // Exibe mensagem de sucesso
    document.getElementById('mensagem').textContent = 'Formulário enviado com sucesso!';

    // Aqui você pode adicionar lógica para enviar os dados para o servidor
    // ou realizar outras ações com os dados.
});

document.getElementById('historico').addEventListener('change', function(){
    let descricao = document.getElementById('descricao')
    if (this.value === 'descricao'){
        descricao.style.display = 'block'
    } else {
        descricao.style.display = 'none'
    }
})

document.getElementById('descricao').style.display = 'none'