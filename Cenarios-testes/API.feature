        #language: pt

        Funcionalidade: API de cupons
        Como admin da EBAC-SHOP
        Quero criar um serviço de cupom
        Para poder listar e cadastrar os cupons

        Contexto:
        Dado que eu autentique na API o usuario "admin_ebac" a senha "@admin!&b@c!2022"
        autenticação "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"

        Cenario: Listar cupons
        Quando buscar por cupons cadastrados "http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons "
        * buscar por ID "http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/get_wc_v3_coupons__id_ "
Entao os cupons devem ser listados

Cenario: Cadastrar cupons com campos obrigatorios
Quando for cadastrado <valor> http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons
E o tipo de <desconto>
Então o nome do cupom não deve estar repetido
E os outros campos vão aparecer como opcionais