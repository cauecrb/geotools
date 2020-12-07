const valor = localStorage.getItem('arquivoexp');
const questoes = JSON.parse(localStorage.getItem(valor));

const len = questoes.perquntas.length;
$("#responder-form").append('<h2 id="nome-form">'+ questoes.formulario +'</h2>')
for( var i = 0; i < len; i++){
$("#responder-form").append("<br>",
    '<h3 name="perguntas-form">'+questoes.perquntas[i]+'</h3>',
    '<br>',
    '<input name="respostas-form" size="100" ></input>'
    );
};

var x=document.getElementById("latlong");
        if (navigator.geolocation)
        {
          navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
        function showPosition(position)
        {
          x.innerHTML="Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;  
        }