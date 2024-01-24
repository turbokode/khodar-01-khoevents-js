# [Khoevents]

## Table of Contents

- [\[Khoevents\]](#khoevents)
  - [Table of Contents](#table-of-contents)
  - [Sobre o projeto](#sobre-o-projeto)
    - [Tecnologias](#tecnologias)
  - [Endpoints da API](#endpoints-da-api)
    - [1. Status da API](#1-status-da-api)
    - [2. Comunidades](#2-comunidades)
    - [3. Sessões](#3-sessões)
    - [4. Eventos](#4-eventos)
    - [5. Tickets](#5-tickets)
  - [Testando a app 🚀](#testando-a-app-)
    - [Pré-requisitos 📋](#pré-requisitos-)
    - [Instalação 🛠️](#instalação-️)
  - [Como Contribuir](#como-contribuir)
    - [Reportar Problemas ou Sugestões](#reportar-problemas-ou-sugestões)
    - [Contribuir com Código](#contribuir-com-código)
  - [Licença📝](#licença)


## Sobre o projeto

Este é o backend do khoevents.

### Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Prisma](https://www.prisma.io/)
- [Redis](https://redis.io/docs/connect/clients/nodejs/)

## Endpoints da API

### 1. Status da API

- **Verificação do Status**
  - `GET /api/v1/status`
  - Verifica o status da API.

### 2. Comunidades

- **Registro de Nova Comunidade**

  - `POST /api/v1/communities`
  - Registra uma nova comunidade na plataforma.

- **Listagem de Comunidades**

  - `GET /api/v1/communities`
  - Lista todas as comunidades registradas.

- **Detalhes da Comunidade**

  - `GET /api/v1/communities/:id`
  - Obtém detalhes de uma comunidade específica.

- **Verificação de Comunidade por Token**

  - `GET /api/v1/communities/verify/:token`
  - Verifica o email de uma comunidade com base em um token enviado por email.

- **Detalhes da Comunidade Autenticada**
  - `GET /api/v1/communities/me`
  - Obtém os detalhes da comunidade autenticada.

### 3. Sessões

- **Início de Sessão (Login)**

  - `POST /api/v1/sessions`
  - Inicia uma nova sessão (login).

- **Encerramento de Sessão (Logout) (Autenticado)**
  - `DELETE /api/v1/sessions`
  - Encerra a sessão atual (logout).

### 4. Eventos

- **Listagem de Eventos**

  - `GET /api/v1/events`
  - Lista todos os eventos registrados.

- **Detalhes de um Evento**

  - `GET /api/v1/events/:id`
  - Obtém detalhes de um evento específico.

- **Criação de Evento (Autenticado)**

  - `POST /api/v1/events`
  - Cria um novo evento (autenticado).

- **Exclusão de Evento (Autenticado)**
  - `DELETE /api/v1/events/:id`
  - Exclui um evento (autenticado).

### 5. Tickets

- **Criação de Ticket**

  - `POST /api/v1/tickets`
  - Cria um novo ticket.

- **Listagem de Tickets de um Evento (Autenticado)**

  - `GET /api/v1/tickets/:eventId`
  - Lista os tickets de um evento (autenticado).

- **Atualização de Check-in de Ticket (Autenticado)**
  - `PATCH /api/v1/tickets/checkin/:eventId`
  - Atualiza o status de check-in de um ticket (autenticado).

**Observações:**

- Para detalhes do corpo (body), consulte os arquivos `.http` na pasta `requests`.
- Os exemplos de requisições podem ser executados usando ferramentas como o plugin REST Client do VS Code.

## Testando a app 🚀

Siga estes passos para configurar e executar rapidamente **khoevents** no seu ambiente de desenvolvimento local.

### Pré-requisitos 📋

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (package managers)
- [Git](https://git-scm.com/) (para clonar o repositório)
- [Postgres](https://www.postgresql.org/) ou [MySQL](https://www.mysql.com/) (Para a Base de Dados)
- [Redis](https://redis.io/) (Para armazenamento de dados em memória)
- Configure um SMTP, como o [Mailtrap](https://mailtrap.io/home), para envio de emails pelo app

### Instalação 🛠️

1. Clone o repositório khoevents em sua máquina local:

   ```bash
   git clone https://github.com/ltsaiete/kho.event-khodar-01.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd kho.event-khodar-01
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Crie um ficheiro .env baseado no .env.example e configure as variáveis de acordo com o seu ambiente
5. Execute as migrations

   ```bash
   npx prisma migrate dev
   ```

6. Execute o projeto

   ```bash
    npm run dev
   ```

7. Entre na pasta requests e execute algumas requisições da app

## Como Contribuir

O seu contributo é bem-vindo! Siga os passos abaixo para colaborar com o desenvolvimento deste projeto.

### Reportar Problemas ou Sugestões

Se você encontrar algum problema ou tiver sugestões de melhoria, por favor, abra uma **issue** neste repositório. Certifique-se de incluir informações detalhadas sobre o problema e/ou a sua sugestão.

### Contribuir com Código

Se deseja contribuir diretamente com código, siga os passos abaixo:

1. Faça um **fork** deste repositório.
2. Crie uma nova branch para a sua contribuição: `git checkout -b sua-feature`.
3. Faça as alterações desejadas.
4. Certifique-se de testar as suas alterações.
5. Faça commit das suas alterações: `git commit -m "Adiciona sua-feature"`.
6. Faça push para a sua branch: `git push origin sua-feature`.
7. Abra um **pull request** neste repositório.

## Licença📝

Este projeto está sob a licença MIT. verifique o arquivo [LICENSE](LICENSE) para obter detalhes.

---
