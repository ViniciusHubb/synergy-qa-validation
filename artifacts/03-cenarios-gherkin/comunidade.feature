# language: pt

@RF008 @RF009 @CT011
Funcionalidade: Comunidade Premium

  Cenário: Usuário Premium publicar e responder no fórum
    Dado que o usuário esteja autenticado com plano Premium
    Quando publicar uma discussão válida
    E responder a uma discussão disponível
    Então o sistema deve exibir a publicação e a resposta
    E deve associar o conteúdo ao usuário autor
