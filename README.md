# SES-PB | Sistema de Estoque de Inseticidas

Sistema de controle de movimentação de inseticidas (recebimento e entrega) para as 12 Gerências Regionais de Saúde do Estado da Paraíba.

## Descrição do Projeto

Este projeto foi desenvolvido utilizando **Google Apps Script (GAS)**, **Google Sheets** e **HTML/CSS**. Ele permite que técnicos de todas as regionais insiram dados de forma padronizada através de um Web App, garantindo que as informações sejam registradas simultaneamente em uma planilha estadual (mestre) e na planilha específica da regional do usuário.

## Funcionalidades

- **Acesso Restrito:** Acesso limitado a usuários com contas Google autorizadas.
- **Roteamento de Dados:** Os dados de cada GRS são enviados para planilhas isoladas e centralizados na planilha PB.
- **Filtro em Cascata:** Seleção dinâmica de municípios com base na GRS selecionada (223 municípios mapeados).
- **Validação Inteligente:** Bloqueio de datas futuras e alerta visual de produtos vencidos.

## Instalação e Configuração

Este projeto não requer instalação em servidor. Ele roda nativamente no ecossistema Google. Para replicar:

1. Duplique a estrutura de 13 planilhas.
2. Cole os IDs das planilhas no arquivo `Código.gs` no objeto `MAPA_PLANILHAS`.
3. Publique o script como "App da Web".

## Licença

Este projeto é de autoria de **Silmara Pereira de Lima** e é licenciado sob a [Licença MIT](LICENSE).

---

&copy; 2026 - Secretaria de Estado da Saúde da Paraíba - João Pessoa.
