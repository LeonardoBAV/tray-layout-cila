# alphatheme_tray

Olá, tudo bom?



Estarei lhe passando tudo o que você precisa fazer:


Para subir a aplicação você precisará dos seguintes comandos:



docker-compose up -d

docker exec -it opencode /bin/bash



Depois destes comando você irá para essa tela:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/078/full/unnamed_%281%29.png?1631629994)

Você pode executar o comando:

opencode help -> para mostrar todos os comandos disponíveis do opencode:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/085/full/unnamed_%282%29.png?1631630126)

você precisará de duas chaves para conectar seu ambiente com o tema que você está editando, para isso você precisará criar estas chaves no painel de sua loja, entrando em Minha Loja > Design da Loja

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/092/original/unnamed_%283%29.png?1631630197)

Clicando na seta para baixo, irá aparecer a opção de Lista de desenvolvedores:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/095/full/unnamed_%284%29.png?1631630240)

Clicando nela você irá criar o seu usuário:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/097/full/unnamed_%285%29.png?1631630299)

E você vai precisar destes dados:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/105/full/unnamed_%286%29.png?1631630347)

com a chave e a senha, você consegue ter acesso ao tema instalado na sua loja:



comando key password código do tema



opencode configure 533c9c757172162670711f 80c2f14e274a3eec907023199

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/111/full/unnamed_%287%29.png?1631630394)

Pronto está com o ambiente pronto para ser usado, e a partir de agora você pode fazer alguns comandos:



opencode download -> vai baixar os arquivos deste tema para dentro da pasta themes que está junto no arquivo que estou te encaminhando, e pode abrir e editar através de um editor de código de sua preferencia.

Neste Ponto se tiver algum problema com o download, terá de baixar manualmente os arquivos através da opção EDITAR HTML:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/118/original/unnamed_%288%29.png?1631630462)

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/120/original/unnamed_%289%29.png?1631630498)

Depois para que os efeitos seja repercutido para a loja, você precisa usar o comando:

opencode watch -> para ficar escutando todas as modificações que você está fazendo.



Abra uma nova guia no terminal dentro da pasta themes e executa o comando para ficar escutando e minificando o SASS:

sass --watch --no-source-map css/sass/theme.min.scss css/theme.min.css --style=compressed



Pronto agora está 100% configurado



para verificar as modificações, você pode clicar aqui:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/130/original/unnamed_%2810%29.png?1631630556)

Lembrando que precisa de um Preview:

![Imagem de exemplo](https://uploaddeimagens.com.br/images/003/429/136/original/unnamed_%2811%29.png?1631630604)

&opencode_theme=60353a9930476&7157 -> este Preview você leva para qual pagina você quiser da loja para verificar as modificações.

<hr/>

Crie os seguintes arquivos na raiz do projeto:
## Dockerfile

```yml
FROM ruby:2.3.3

RUN gem install bundler

RUN gem install launchy -v 2.4.3

RUN gem install faraday -v 1.0.1

RUN gem install nokogiri -v 1.10.10

RUN gem install opencode_theme
```

## docker-compose.yml

```yml
version: '3'

services:
  web_console_tool:
    container_name: opencode
    build: .
    volumes:
      - ./themes:/themes
    working_dir: /themes
    tty: true
    stdin_open: true
```
