

# Next Auth v5 Boilerplate 🔐

- Um boilerplate moderno e seguro usando Next.js 14 e NextAuth v5, com integração Prisma e Neon Database. Perfeito para iniciar projetos que necessitam de autenticação robusta.

## ✨ Características
- 🔒 Autenticação completa com NextAuth v5
- 🚀 Next.js 14 com App Router
- 💾 Prisma ORM + Neon Database
- 🎨 UI moderna com Tailwind CSS e Radix UI
- 📝 TypeScript para tipo seguro
- 🛡️ Validação com Zod
- 🎯 Formulários com React Hook Form

## ⚡ Destaques Técnicos
#### React Query

- Cache Inteligente: Gerenciamento automático de cache para dados
- Real-Time Updates: Sincronização automática de dados
#### Otimização de Performance:
- Deduplicação de requisições
- Background data refetching
- Gerenciamento de estado do servidor

## 🛠️ Stack Tecnológica

#### Core
- Next.js 14 - Framework React
- TypeScript - Linguagem
- NextAuth v5 - Sistema de Autenticação

#### Database & ORM
- Prisma - ORM
- Neon Database - Banco de dados PostgreSQL serverless
- @auth/prisma-adapter - Adaptador Prisma para NextAuth

### UI/UX
- Tailwind CSS - Estilização
- Radix UI - Componentes primitivos
- Lucide React - Ícones
- Class Variance Authority - Variantes de componentes
- clsx - Utilitário de classes

##  Formulários e Validação
- React Hook Form
- Zod

## 🚀 Como Executar

**1.** **Clone o repositório**
```bash
git clone https://github.com/DanielEgiidio/next-auth-v5
```
**2. ** **Instale as dependências**
```bash
npm install
```
**3**. **Configure o .env com essas chaves**
```bash
DATABASE_URL="sua-url-neon-database"
NEXTAUTH_SECRET="sua-chave-secreta"
NEXTAUTH_URL="http://localhost:3000 | seu-dominio"
```
**4**. **Execute as migrações do Prisma**
```bash
npx prisma migrate dev
```
**5**. **Execute o projeto**
```bash
npm run dev
```
## 🔧 Scripts

- dev: Inicia o servidor de desenvolvimento
- build: Gera a versão de produção
- start: Inicia o servidor de produção
- lint: Executa o linter
- postinstall: Gera os tipos do Prisma

## 🔒 Rotas de Autenticação

- `/` - Página inicial
- `/admin` - Painel administrativo
- `/settings` - Configurações do usuário
- `/user/[id]` - Perfil do usuário (rota dinâmica)

## 📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações
