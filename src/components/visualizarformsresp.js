const questionarios = JSON.parse(localStorage.getItem('listaQuestionariosrespondidos'));
const len = questionarios.list.length;

for( var i = 0; i < len; i++){
$("#form-resp").append("<br>",
    '<button type="button" value='+questionarios.list[i]+'>'+questionarios.list[i]+'</button>',
    '<br>'
    );
};

$('button').click(function(){
    var valor = $(this).text();
    localStorage.setItem('arquivoexp', valor);

});