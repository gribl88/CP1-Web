// pegar o tbody no HTML e passar para o Maravilhoso Mundo JS
const tbody = document.querySelector('tbody');

// pegar o form = document.querySelector('form')
// atribuir um escutador de eventos (submit) = .addEventListener('submit')
// criar uma função = ela irá receber o evento = , function(e) 
// cancelar o evento padrão


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // criar um array que receberá os campos
    const campos = [
        document.querySelector('#descricao'),
        document.querySelector('#responsavel'),
        document.querySelector('#importancia'),
        document.querySelector('#departamento')
    ];
    
    // criar a tr
    const tr = document.createElement('tr');
    
    // criar um for para percorrer o Array, para cada índice do Array =  campos.forEach(campo =>
    // criar uma td = const td = document.createElement('td');
    // pegar o conteúdo digitado no campo e passar para a td = td.textContent = campo.value;
    // vincular a td na tr  = tr.appendChild(td);
    
    campos.forEach(campo => {
        // console.log(campo.value);
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })
    
    // for(let i = 0; i < campos.length; i++){
    //     const td = document.createElement('td');
    //     td.textContent = campos[i].value;
    //     tr.appendChild(td);
    // }

    // colocar no tbody a linha que foi criada com as suas respectivss td´s

    tbody.appendChild(tr);

    // limpar o form - reset()
    this.reset();
})