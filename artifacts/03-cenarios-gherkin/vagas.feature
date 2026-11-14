# language: pt

@RF006 @CT006
Funcionalidade: Gerenciamento de vagas

  Cenário: Startup publicar vaga com dados obrigatórios
    Dado que o usuário esteja autenticado como Startup
    Quando preencher os dados obrigatórios de uma vaga
    E confirmar a publicação
    Então o sistema deve criar a vaga
    E deve exibi-la no mural correspondente

@RF006 @CT007
  Cenário: Startup editar e desativar sua vaga
    Dado que a Startup possua uma vaga ativa própria
    Quando alterar um dado da vaga
    E desativar a publicação
    Então o sistema deve salvar a alteração
    E a vaga não deve aparecer como ativa no mural

@RF007 @CT008
  Cenário: Impedir profissional de gerenciar vaga de Startup
    Dado que o usuário esteja autenticado como Profissional
    E exista uma vaga pertencente a uma Startup
    Quando tentar editar ou excluir a vaga
    Então o sistema deve negar a operação
    E deve preservar os dados da vaga
