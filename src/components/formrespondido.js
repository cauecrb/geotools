const valor = localStorage.getItem('arquivoexp');
console.log(valor);
const questoes1 = localStorage.getItem(valor);
console.log(questoes1);
const questoes = JSON.parse(localStorage.getItem(valor));
console.log("questoes: ",questoes);

const len = questoes.perquntas.length;
console.log(len);
console.log(questoes.formulario);
$("#responder-form").append('<h2 id="nome-form">'+ valor +'</h2>')
for( var i = 0; i < len; i++){
$("#responder-form").append("<br>",
    '<h3 name="perguntas-form">'+questoes.perquntas[i]+'</h3>',
    '<h4 name="respostas-form">'+questoes.respostas[i]+'</h4>',
    );
    console.log(questoes.perquntas[i]);
};