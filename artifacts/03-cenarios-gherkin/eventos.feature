# language: pt

@RF003 @CT004
Funcionalidade: Gestão e participação em eventos

  Cenário: Administrador criar evento externo válido
    Dado que o usuário esteja autenticado como Administrador
    Quando preencher os dados obrigatórios de um evento externo
    E informar um link externo válido
    Então o sistema deve criar o evento e exibi-lo na listagem

@RF004 @RF005 @CT005
  Cenário: Investidor confirmar presença pública em evento
    Dado que o usuário esteja autenticado como Investidor Anjo
    E exista um evento futuro com capacidade disponível
    Quando confirmar presença no evento
    Então o sistema deve registrar a presença uma única vez
    E deve exibir publicamente o investidor na lista de presentes
