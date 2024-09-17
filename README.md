# 💼 Desafio fbenevides

Este repositório é dedicado ao desenvolvimento do desafio fbenevides, que consiste na criação de um sistema de login.

## 📖 Sumário

1. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
2. [Requisitos](#-requisitos)
3. [Instalação](#-instalação)
4. [Estrutura do Projeto](#-estrutura-do-projeto)
5. [Como me localizar no projeto?](#-como-me-localizar-no-projeto)
6. [Conclusão](#-conclusão)

### 💻 Tecnologias Utilizadas

- **React.js**:
- **Redux**
- **TypeScript**
- **Node.js**
- **Express**
- JWT
- **PostgreSQL**
- **Prisma: ORM**

## 📝 Requisitos

Certifique-se de ter os seguintes requisitos instalados antes de começar:

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)
- **Git**
- **PgAdmin** (ou outro cliente de banco de dados PostgreSQL) - Utilize a versão 16.4: [PgAdmin Downloads](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

## 🛠️ Instalação

### Passos para Uso:

1. **Clone o Repositório:**
  - Acesse o diretório do cliente:
  ```bash
  git clone https: https://github.com/devpdro/challenge-fbenevides.git
  cd challenge-fbenevides
  cd .
  ```

2. **Instale as dependências necessárias**
  ```bash
  cd client
  cd npm install
  ```

## Configuração do Servidor

1. **Navegue para o Diretório do Servidor e Instale as Dependências:**
   - Acesse o diretório do servidor e instale as dependências necessárias:
     ```bash
     cd ..
     cd server
     npm install
     ```

2. **Rodar as Migrações do Prisma:**
   - Execute o comando para criar as tabelas no banco de dados:
     ```bash
     npx prisma migrate dev
     ```
   - Durante o processo, você será solicitado a fornecer um nome para a migração. Um nome recomendado é `create_table_accounts`.

3. **Deploy das Migrações:**
   - Aplique as migrações para atualizar o banco de dados:
     ```bash
     npx prisma migrate deploy
     ```

4. **Inicialização do Servidor Back-end:**
   - Inicie o servidor back-end com o seguinte comando:
     ```bash
     npm run dev
     ```
   - Agora, o servidor back-end estará rodando. O front-end deve ser iniciado conforme suas próprias instruções.

## Configuração das Variáveis de Ambiente

1. **Configuração da Variável `DATABASE_URL`:**
   - Altere a seguinte linha ao arquivo `.env` para configurar a URL de conexão com o banco de dados PostgreSQL local:
     ```plaintext
     DATABASE_URL="postgresql://postgres:<sua-senha>@localhost:5432/login_system?schema=public"
     ```
   - Substitua `<sua-senha>` pela senha do seu usuário PostgreSQL.


## 📁 Estrutura do Projeto

### Back-end

### ./src
A estrutura do Back-end é organizada para separar claramente as responsabilidades e facilitar a manutenção.

- **config**: Configurações gerais de infraestrutura e ambiente.
- **controllers**: Lógica de controle das rotas e manipulação de requisições.
- **data**: Modelos de dados e lógica de acesso ao banco de dados.
- **lib**: Componentes e utilitários específicos do Back-end.
- **main**: Lógica principal e configuração do servidor.
- **middleware**: Funções intermediárias para processamento de requisições, como autenticação e validação.
- **routes**: Definição das rotas e suas associações com os controllers.

### Front-end

### ./src
Pasta principal contendo todas as subpastas organizadas por funcionalidade.

- **infra**: Configurações de infraestrutura.
  - **store**: Controle de estado de autenticação com Jotai.

- **main**: Lógica principal do projeto.

- **presentation**: Componentes de UI e páginas.
  - **components**: Componentes reutilizáveis de UI.
  - **pages**: Componentes específicos das páginas.
  - **styles**: Arquivos de estilo.

- **utils**: Funções utilitárias.

## 🗺️ Como me localizar no projeto?

- **client**: Diretório principal para a aplicação Front-end.
  - **src**: Código-fonte da aplicação.
    - **infra**: Configurações e gerenciamento de estado.
      - **store**: Controle de estado com Jotai.
    - **main**: Lógica principal.
    - **presentation**: Componentes de UI e páginas.
      - **components**: Componentes reutilizáveis.
      - **pages**: Componentes específicos das páginas.
      - **styles**: Estilos e temas.
    - **utils**: Funções e utilitários auxiliares.

- **server**: Diretório principal para a aplicação Back-end.
  - **config**: Configurações gerais e de ambiente.
  - **controllers**: Lógica de controle e manipulação de requisições.
  - **data**: Modelos e acesso ao banco de dados.
  - **lib**: Utilitários e componentes específicos.
  - **main**: Configuração e lógica central do servidor.
  - **middleware**: Funções intermediárias para processamento de requisições.
  - **routes**: Definição e gerenciamento das rotas.
 
### 📋 Recursos e Melhorias Futuras
  - Implementar Banco de Dados na Nuvem
  - Otimização do Código Backend: Refatorar o código para um design mais modular, com responsabilidades bem definidas.
  - Segurança
  - Implementar Endpoint GET de Boas-Vindas (Welcome): [A Ser Feito] - Este recurso estava planejado para o desafio, mas não foi possível implementá-lo a tempo.
