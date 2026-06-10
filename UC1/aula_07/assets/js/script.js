//análise booleana
let status = true
let acao = prompt ("indique uma ação 0:desativa ou 1: ativa");
//let confirmar =confirm("deseja realizar a alteração?")
if(acao!== "" && acao<=1) {

    let confirmar =confirm("deseja alterar o sistema?")

    if(confirmar){

        if(acao==0){
            status=false
            console.log(`o sistema foi desativado
            o status agora é ${status}`)
        } else {
            
            console.log(` o sistema está ativado o status é ${status}`)
        }

console.log(`voce confirmou a alteração ${acao}`)



 } else {
     alert (" você cancelou a alteração")
    }
    } else {
     alert (" você não informou o código de ação")
    }
