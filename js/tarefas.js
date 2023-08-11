const tbody = document.querySelector('tbody');
let listaTarefasArray = [];

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
    
    campos.forEach(campo => {
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

    // colocar no tbody a linha que foi criada com as suas respectivss td´s
    tbody.appendChild(tr);

    const listaTarefasArrayUl = document.querySelector("#lista-tarefas");
    //Criando um elemento list-item(li)
    let li = document.createElement("li");
    li.textContent = tbody.value;

    //Adicionando o elemento li ao parentNode UL.
    listaTarefasArrayUl.appendChild(li);
    
    //Adicionando um botão dentro do li para excluir a tarefa.
    let botaApagaTarefa = document.createElement("button");

    //Adicionando um texto ao botao de apagar tarefas.
    botaApagaTarefa.textContent = " x ";

    //Adicionado uma classe ao botao de apagar tarefa
    botaApagaTarefa.setAttribute("class","exclui");

    //Adicionando o botão ao elemento li.
    li.appendChild(botaApagaTarefa);
    
    //Evento que será disparado quando clicarmos em x, ou seja, quando for
    //clicado na tarefa vai ser removida da lista e também do Array.
    botaApagaTarefa.addEventListener('click',(evento)=>{
                console.log(evento.target.parentNode.textContent.split(" ")[0]);
                 evento.target.parentNode.remove();
                 listaTarefasArray.forEach(tarefa=>{
                    
                    if(evento.target.parentNode.textContent.split(" ")[0] == tarefa){
                        listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1);
                    }
                    console.log(listaTarefasArray);
                 });
    })
    inputTarefa.value = "";

    // limpar o form - reset()
    // this.reset();
})