$("#salvar").click(function(){
    const nomeForm = document.getElementById('nomeform');
    const nomeUsuario = document.getElementById('userName');
    const perguntas = []; 
    var con = 0;
    const ind = document.getElementsByName("questoes").length;
    var d = new Date();
    var controle = {} ;
  
  //este for guarda as perguntas em um array
    for ( var i=0; i < ind; i++){
        perguntas.push(document.getElementsByName("questoes")[con].value);
        con++
    }

    dataHora = (d.toLocaleString());  

    //esta variavel é o formato do objeto q sera guardado
    var quest ={
      nome: nomeUsuario.value,
      formulario: nomeForm.value,
      perquntas: perguntas,
      data: dataHora
    };

    //para garantir um nome unico para o formulario, acrescentei a data que foi feita
    const nomeArq = nomeForm.value+dataHora;

    //este if garante que se for o primeiro formulario gravado, nao dara erro
    if (!JSON.parse(localStorage.getItem('listaQuestionarios'))){
      console.log('sem questionarios')
      controle={list: []}
    }
    else{
      //caso não seja o primeiro formulrio, ele pega a lista guardada no localstorage
      controle = JSON.parse(localStorage.getItem('listaQuestionarios'));
      controle.list.push(nomeArq);
    }

    //aqui a variavel controle, recebe um novo objeto pelo nome do arquivo


    //guarda a lista de questionarios armazenada na variavel controle
    localStorage.setItem('listaQuestionarios', JSON.stringify(controle));

    //por fim, guarda as perguntas do questionario em um arquivo proprio
    localStorage.setItem(nomeArq, JSON.stringify(quest));

    alert("Questionário cadastrado com sucesso!");
    location.href="../public/index.html";
});