# language: pt

@RF008 @RF010 @CT012
Funcionalidade: Roadmap burocrático

  Cenário: Startup Premium atualizar o progresso do roadmap
    Dado que a Startup esteja autenticada com plano Premium
    Quando acessar o roadmap e concluir um passo permitido
    Então o sistema deve atualizar o status do passo
    E deve recalcular o progresso da Startup
