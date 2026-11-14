# language: pt

@RF008 @CT009
Funcionalidade: Controle de acesso Premium

  Cenário: Bloquear conta gratuita ao acessar recurso Premium
    Dado que o usuário esteja autenticado com plano Gratuito
    Quando acessar a comunidade, o roadmap ou os templates
    Então o sistema deve exibir o bloqueio Premium
    E não deve disponibilizar o conteúdo protegido

@RF008 @CT010
  Cenário: Liberar recurso após upgrade Premium simulado
    Dado que o usuário esteja autenticado com plano Gratuito
    Quando concluir o upgrade Premium simulado
    Então o sistema deve atualizar o plano da conta
    E deve permitir o acesso aos recursos Premium
