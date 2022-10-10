# Desafio Wavecom

## Instalar ambiente
devem ter docker e docker-compose. basta ter acesso à internet e correr `docker-compose up -d --build`. O porto 1026 deve estar livre nos vossos computadores.

## Datamodels
Cada tipo de elemento de uma cidade inteligente é acompanhado de uma específicação. No ficheiro models.md deixamos alguns exemplos para se familiarizarem. <p>
Num cenário ideal, o vosso mapa deve representar > 5 tipos diferentes, sendo que alguns devem ser móveis (p.e um autocarro)
Podem usar como referência https://github.com/smart-data-models/SmartCities
<p>

## Como criar dados
Juntamente com o exercício, encontrarão um conjunto de endpoints (exportados do postman (https://www.postman.com/)). Estes servem de referência para criarem e darem vida ao vosso mapa. P.E. um script a alterar a posição dos autocarros na cidade.

## Documentação adicional da API
https://github.com/telefonicaid/fiware-orion/blob/master/doc/manuals/user/walkthrough_apiv2.md#getting-all-entities-and-filtering

## Next steps
Após dominarem os conceitos anteriormente descritos, podem começar por:
- definir um cenário da vossa cidade inteligente (p.e 3 parques, 5 autocarros, 10 restaurantes, semáforos etc)
- criar um frontend que represente esses dados
- aumentar/escalar o número de entidades de forma a que interpretar o mapa se torne complexo.
- resolver os problemas de usabilidade e visualização de forma a simplificar a mesma.

Nota: dar prioridade visual a certos tipos de entidades pode ser um bom ponto de partida :) o mesmo de aplica a escolher um atributo "principal" para cada tipo escolhido.

Nota2: Caso não automatizem a criação de dados, o deliverable pode ser apenas um vídeo a demonstrar como resolveram o problema.

Bom desafio.


