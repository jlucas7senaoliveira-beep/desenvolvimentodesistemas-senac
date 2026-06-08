# CONTÉUDO DA SEGUNDA AULA 

Apresentação dos principais aplicativos
Git
vscode
node js

simulação de instalação do vscode

# UTILIZAÇÃO DO GIT

## 1. CONECTAR USUÁRIO

COMANDOS
git config --global user.name "nomedeusuariodosistema"
git config --global user.email "emailusuariodogit"
<!-- OBJETIVO identificar o usuário que está atualizando o projeto -->
<!-- Este comando usa-se somente uma vez ou quando necessitarde nova identificação -->
## 2.
<!-- É importante na primeira vez que o github esteja logado, pois o sistema vai precisar dar permissão -->

## PARA ENVIAR PRA REPOSITÓRIO
DIGITE:
git add .
<!-- prepara os arquivos para envio -->
git commit -m nome para rotulação"
<!-- criara chave de identificação -->
git push
<!-- Envia os arquivos para  repositório -->

ESTES COMANDOS SERÂO SEMPRE EXECUTADOS.SERÁ UMA ROTINA A SER EXECUTADA SEMPRE PARA ATUALIZAR SEUS PROJETOS.
## PARA BAIXAR ATUALIZAÇÕES DO REPOSITÓRIO

git pull
<--baixar as atualizações do repositório -->
Exemplo do caso:
Pedro desenvolve seus projetos no trabalho.Ele executa os comandos no git add .,git commit -m "nome" e git push.
No final de semana, em casa, Pedro clona clona seu projeto pro seu computador pessoal.Realiza algumas alterações no projeto e atualiza no repositório repetindo novamente os comandos: git add ., git commit -m "nome" e git push.
Na segunda feia ao chegar no trabalho, Pedro abre o terminal e aplica o comando: git pull, para atualizar no trabalho os arquivos que ele alterou ni final de semana 