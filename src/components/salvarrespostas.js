$("#salvar-resp").click(function(){
    var con = 0;
    const nomeForm = document.getElementById('nome-form').textContent;
    var d = new Date();
    const perguntas = []; 
    const respostas = [];
    const ind = document.getElementsByName("perguntas-form").length;
    const lat = document.getElementById("latlong").textContent;
    var controle ;

    dataHora = (d.toLocaleString()); 
    //este for guarda as perguntas e respostas em um array.
    for ( var i=0; i < ind; i++){
        perguntas.push(document.getElementsByName("perguntas-form")[con].textContent);
        respostas.push(document.getElementsByName("respostas-form")[con].value);
        con++
    }

    //variavel que junta as informacoes necessarias para serem guardadas
    var quest ={
        formulario: nomeForm.value,
        perquntas: perguntas,
        respostas: respostas,
        data: dataHora,
        coordenadas: lat
      };

    //para garantir um nome unico para o formulario, acrescentei a data que foi feita
    const nomeArq = nomeForm+dataHora;

    //este if garante que se for o primeiro formulario respondido a ser gravado, nao dara erro
    if (!JSON.parse(localStorage.getItem('listaQuestionariosrespondidos'))){
        console.log('sem questionarios respondidos')
        controle={list: []}      
    }
      else{
        //caso não seja o primeiro formulrio, ele pega a lista guardada no localstorage
        controle = JSON.parse(localStorage.getItem('listaQuestionariosrespondidos'));
        
        //aqui a variavel controle, recebe um novo objeto pelo nome do arquivo
        controle.list.push(nomeArq);
      }



    //guarda a lista de questionarios armazenada na variavel controle
    localStorage.setItem('listaQuestionariosrespondidos', JSON.stringify(controle));

    //por fim, guarda as perguntas e respostas do questionario em um arquivo proprio
    localStorage.setItem(nomeArq, JSON.stringify(quest));

    alert("Respostas gravadas com sucesso!");
    location.href="../public/index.html";
});