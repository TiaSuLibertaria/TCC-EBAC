#language: pt

Funcionalidade: Adicionar itens no carrinho
Como cliente da da EBAC-SHOP
Quero adicionar produtos no carrinho
Para realizar as compras dos itens

Contexto:
Dado que eu acesse a página de produtos da loja EBAC-SHOP
Quando adicionar produtos no carrinho

Cenário: Não é permitido incerir mais de 10 itens de um mesmo produto  ao carrinho
E o numero for maior ou igual a 11 produtos
Então deve aparecer uma pensagem dizendo que não é permitido

Cenário: Os valores não devem ultrapassar a R$ 990,00
E o valor total exceder a R$990,00
Então uma mensagem deve aparecer sinalizando que não é permitido esse valor

Cenário: Cupons de 10% de desconto
E os valor total estiver entre R$200 e R$600
Então deve ser aplicado um cupom de 10% de desconto

Cenario: Cupons com 15% de desconto
E o valar total estiver entre R$601 e R$899,99
Então um cupom de R$15% de desconto deve ser aplicado
