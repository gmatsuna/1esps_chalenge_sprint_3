# 🏥 CareQuest — Sprint 3

> **Challenge Care Plus** · Jornada Gamificada do Cuidado Contínuo
> 1º ano de Engenharia de Software · FIAP · 2026/1
Entrega da Sprint 3

---

## 👨‍💻 Integrantes

| Nome | RM |
|------|----|
| Douglas Taveira Vilella Roberto | 567846 |
| Fábio Alexandre Barbosa Filho   | 567419 |
| Gilberto Hideaki Matsunaga      | 568191 |
| Igor Davi Avelar Rosa Cesário   | 568163 |
| Wenderson da Silva Santos       | 567847 |

---

# Sobre o Projeto

O **CareQuest** é uma aplicação web gamificada voltada ao incentivo de hábitos saudáveis através de missões diárias.

O sistema utiliza mecânicas de gamificação como:

* XP
* Pontos
* Níveis
* Sequência de dias (Streak)
* Missões favoritas
* Trilhas de bem-estar

A aplicação foi desenvolvida utilizando:

* Front-End responsivo com HTML, TailwindCSS e JavaScript
* Back-End em Python utilizando Flask
* Persistência de dados em arquivos JSON

---

# Objetivo do Sprint 3

Nesta etapa do projeto foram implementadas:

* Integração completa entre Front-End e Back-End
* Persistência de dados
* Operações CRUD
* Sistema de favoritos
* Atualização dinâmica de:
  * XP
  * Pontos
  * Streak
  * Nível
* Responsividade completa
* Organização modular do código
* Tratamento de erros com try-except

---

# Tecnologias Utilizadas

## Front-End

* HTML5
* TailwindCSS
* JavaScript
* Bootstrap Icons
* Font Awesome

## Back-End

* Python 3
* Flask
* JSON

---

# Estrutura do Projeto

```bash
carequest/
│
├── backend/
│   ├── routes/
│   ├── utils/
│   ├── data/
│   └── app.py
│
├── frontend/
│   ├── pages/
│   ├── assets/
│   │   ├── js/
│   │   ├── css/
│   │   └── images/
│
├── README.md
├── INTEGRANTES.txt
```

---

# Funcionalidades Implementadas

## Sistema de Missões

* Listagem dinâmica de missões
* Visualização detalhada
* Conclusão de missão
* Acúmulo de XP e pontos
* Atualização automática de streak

---

## Sistema de Perfil

Atualização dinâmica de:

* Nome do usuário
* Nível
* Sequência de dias (Streak)

---

## Sistema de Carteira

Atualização dinâmica de:

* Pontos acumulados
* XP total

---

## Sistema de Favoritos (CRUD)

CRUD implementado utilizando arquivos JSON.

### CREATE

Adicionar missão aos favoritos

### READ

Listar missões favoritas

### UPDATE

Trocar missão favorita através de modal interativo

### DELETE

Remover missão favorita

---

# Persistência de Dados

O sistema utiliza arquivos `.json` para armazenamento de dados.

Arquivos principais:

```bash
backend/data/user.json
backend/data/missions.json
backend/data/favorites.json
```

---

# Como Instalar

## 1. Clonar o repositório

```bash
git clone <https://github.com/gmatsuna/1esps_chalenge_sprint_3.git>
```

---

## 2. Instalar dependências do Python

Entrar na pasta backend:

```bash
cd backend
```

Instalar Flask:

```bash
pip install flask
```

---

# Como Executar

## Backend Flask

Na pasta backend:

```bash
python app.py
```

Servidor será iniciado em:

```bash
http://127.0.0.1:5000
```

---

## Front-End

Abrir a pasta frontend utilizando o VSCode.

Executar a extensão:

* Live Server

Abrir:

```bash
frontend/pages/index.html
```

O projeto será executado normalmente no navegador.

---

# Responsividade

O projeto foi desenvolvido com:

* TailwindCSS
* Flexbox
* CSS Grid

Compatível com:

* Desktop
* Tablet
* Mobile

---

# Funcionalidades Dinâmicas

O sistema realiza comunicação Front-End ↔ Back-End utilizando:

```javascript
fetch()
```

Exemplo:

```javascript
fetch('http://127.0.0.1:5000/usuario')
```

---

# Tratamento de Erros

O Back-End utiliza:

```python
try:
except:
```

para:

* validação de entradas
* tratamento de erros
* respostas HTTP adequadas

---

# Melhorias Futuras

* Login e autenticação
* Banco de dados SQL
* Dashboard de evolução
* Recompensas desbloqueáveis
* Notificações inteligentes
* Integração com APIs fitness

---

# Conclusão

O CareQuest evoluiu de um protótipo estático para uma aplicação web funcional, responsiva e integrada, utilizando conceitos de:

* Computational Thinking with Python
* Desenvolvimento Front-End
* APIs REST
* Persistência de Dados
* CRUD
* Responsividade
* Gamificação

demonstrando a integração entre Back-End e Front-End em uma solução moderna e intuitiva.
