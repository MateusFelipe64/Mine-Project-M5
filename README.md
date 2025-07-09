🧠 Mente Jovem API & Frontend — Saúde Mental para Jovens
Este projeto é uma iniciativa para facilitar o acesso de jovens a informações confiáveis e úteis sobre saúde mental, reunindo uma API simples e eficiente com um frontend moderno em Next.js. O foco está em promover bem-estar, apoio emocional e conscientização sobre bullying.

🌍 Objetivo
Oferecer uma plataforma que apresente de forma clara e agradável conteúdos relacionados a:

Técnicas práticas de autocuidado

Canais de apoio emocional e psicológico

Informações sobre bullying: o que é, tipos e como agir

Tudo isso com uma interface amigável, responsiva e animada, pensada especialmente para o público jovem.

🔧 Tecnologias Utilizadas
Backend (API)
Node.js

Express.js

Frontend
Next.js 15

React 19

TypeScript

TailwindCSS

Framer Motion (para animações)

React Icons

🧱 Estrutura da API
A API oferece três rotas principais do tipo GET:

Rota	Descrição
/api/autocuidado	Lista técnicas simples de autocuidado diário
/api/apoio	Mostra canais de apoio emocional
/api/bullying	Explica o que é bullying e como agir

Além disso, é possível buscar itens por ID em cada rota:

/api/autocuidado/:id

/api/apoio/:id

/api/bullying/:id

🚀 Frontend — Funcionalidades
Consumo dinâmico das rotas da API

Renderização de cards com dados reais

Navegação suave entre seções na landing page única

Componentização modular e organizada

Estilização moderna com TailwindCSS e fontes personalizadas

Animações com Framer Motion para melhor experiência

Implementação inicial do modo claro/escuro (toggle funcional, porém o modo escuro ainda está em fase final de ajustes)

🛠 Como executar
API
bash
Copiar
Editar
npm install
node index.js
A API estará disponível em http://localhost:3000/api.

Frontend
bash
Copiar
Editar
npm install
npm run dev
Acesse o frontend em http://localhost:3000.

📁 Links importantes
Repositório API: https://github.com/MateusFelipe64/Mente-Jovem-API

Repositório Frontend: https://github.com/MateusFelipe64/Mine-Project-M5

API em produção: https://api-saude-mental-jovens.onrender.com/api

🖼️ Imagens e Demonstrações

Landing page com cards dinâmicos exibindo técnicas e canais de apoio.


Seção dedicada ao autocuidado com dados consumidos da API.


Toggle de modo escuro implementado, ajustes finais em andamento.

🙋 Sobre o desenvolvedor
Este projeto foi criado por Mateus Felipe, estudante de programação, com o apoio do programa Programadores do Amanhã (PDA). A ideia é unir tecnologia e saúde mental para oferecer um recurso acessível e educativo para jovens em todo o Brasil.

💡 Nota importante
O modo claro/escuro já está funcional com um toggle, mas a implementação do modo escuro está ainda em processo de finalização. Nos próximos dias serão feitos ajustes visuais para garantir a melhor experiência possível.
