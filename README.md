# WaiterApp

Painel web para gerenciamento de pedidos de restaurante em tempo real, construído com React e TypeScript.

## Tecnologias

- **React 19** com **TypeScript**
- **Vite**
- **Styled Components**
- **Axios** (requisições HTTP)
- **Socket.IO Client** (atualizações em tempo real)

## Pré-requisitos

- Node.js 18+
- Yarn 4+
- [waiterapp-api](../waiterapp-api) rodando em `http://localhost:3001`

## Instalação e execução

```bash
yarn install
yarn dev
```

O app estará disponível em `http://localhost:5173`.

## Scripts

| Comando | Descrição |
|---|---|
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera o build de produção |
| `yarn preview` | Visualiza o build de produção localmente |

## Funcionalidades

- Visualização dos pedidos separados por status: **Fila de espera**, **Em preparação** e **Pronto**
- Recebimento de novos pedidos em tempo real via WebSocket
- Alteração de status dos pedidos
- Cancelamento de pedidos
- Exibição dos detalhes do pedido com imagem, ingredientes e valor total

## Estrutura de pastas

```
src/
├── assets/                # Ícones e imagens estáticas
├── types/                 # Tipos TypeScript compartilhados
│   └── Order.ts
├── utils/
│   ├── api.ts             # Instância do Axios configurada
│   └── formatCurrency.ts
├── styles/
│   └── GlobalStyles.ts
└── components/
    ├── Header/
    ├── Orders/            # Gerencia os pedidos e conexão WebSocket
    ├── OrdersBoard/       # Coluna de pedidos por status
    └── OrderModal/        # Modal de detalhes do pedido
```
