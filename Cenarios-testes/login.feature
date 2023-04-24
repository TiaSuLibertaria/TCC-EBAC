
#language: pt

        Funcionalidade: Login na plataforma
        Como cliente da EBAC-SHOP
        Quero fazer o login (autenticação) na plataforma
        Para visualizar o meus pedidos

        Contexto:
        Dado que o usuário acesse a página de login

        Cenario: Somente usuários podem fazer login
        Quando usuario digitar o <usuario>
        E a <senha>
        Então deve exibir uma <mensagem> de sucesso

        Cenario: Erro de login e senha
        Quando usario digitar o nome de <usuario> errado
        E a <senha> errada
        Então deve aparecer uma <mensagem> de Erro

        Cenario: Login deve aceitar email, nome de usuário ou cpf
        Quando o usario digitar <email> corretamente
        * digitar nome <usuario> corretamente
        * digitar o cpf "01298778909"
            Então o login deve permitir a continuidade

            Cenario: Usuario errar 3 vezes a senha
            Quando o usuario digitar <senha> errada
            E persistir o erro por 3 vezes seguidas
            Então deve travar o login por 15 minutos

            Exemplos:
            | usario   | senha   |
            | suelen12 | su78787 |






