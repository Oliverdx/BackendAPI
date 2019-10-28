# BikeFix
Applicação para oficinas de bicicleta móvel

## Funcionalidades

 - Cadastro e gerenciamento de usuário (gerenciamento apenas por usuário administrador)
 - Visualização de preços de serviços mais comuns
 - Agendamento de atendimento
 - Solicitação de orçamento


## Rotas API

### Users

 /users/new-user  - Cria usuário
 /users/get-users - Lista de todos os usuários
 /users/find/:username - Busca usuário por nome
 /users/update/:username - Atualiza dados de usuário
 /users/delete/:username - Deleta usuário