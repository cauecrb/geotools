function listaquestionarios(nomeArq){
    if (!JSON.parse(localStorage.getItem('listaQuestionarios'))){
        console.log('sem questionarios')
      }
      else{
        controle = JSON.parse(localStorage.getItem('listaQuestionarios'));
      }
      controle.list.push(nomeArq);
  
      localStorage.setItem('listaQuestionarios', JSON.stringify(controle))
      
};
export default listaQuestionarios();