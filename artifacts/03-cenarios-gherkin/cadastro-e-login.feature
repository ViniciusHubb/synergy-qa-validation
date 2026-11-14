# language: pt

@RF001 @CT001
Funcionalidade: Cadastro de usuários

  Cenário: Cadastrar uma Startup com dados válidos
    Dado que o visitante esteja na tela de cadastro
    Quando informar dados válidos e selecionar o perfil Startup
    E confirmar o cadastro
    Então o sistema deve criar a conta com o perfil Startup

@RF001 @CT002
  Cenário: Recusar cadastro com campo obrigatório inválido
    Dado que o visitante esteja na tela de cadastro
    Quando informar um campo obrigatório inválido
    E confirmar o cadastro
    Então o sistema não deve criar a conta
    E deve apresentar a mensagem de validação correspondente

@RF002 @CT003
  Cenário: Impedir login com credenciais inválidas
    Dado que exista uma conta cadastrada
    Quando informar e-mail ou senha incorretos
    E tentar entrar
    Então o sistema deve rejeitar a autenticação
    E não deve conceder acesso às áreas protegidas
