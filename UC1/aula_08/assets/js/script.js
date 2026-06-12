let status = true;

let idade = prompt("indique sua idade");
while(idade!==null){
      
  if (idade !=="" && idade != null) {


      let numidade = Number(idade)
      if (Number.isFinite(numidade)) {
      // verificação de idade
            if (idade<18){
              acessopermitido = false;
              alert("acesso negado! status:" +acessopermitido)
            } else{
              acessopermitido=true;
              alert("acesso permitido! status atual:" + acessopermitido )
            }


      } else {

        alert (idade + " não é um número")

      }

        } else {
      alert ("vazio ou cancelado")
      } 

   idade =   prompt("indique sua idade");
}