<div align="center">
  <img src="src/1-governo_paraiba.jpeg" width="140px" alt="Logo Governo da Paraíba">
  <h1>🏥 Sistema de Gestão de Inseticidas (SES-PB)</h1>
  
  <p>
    <img src="https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=google-apps-script&logoColor=white" alt="GAS">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
  </p>
</div>

<div align="justify">
Este ecossistema de dados foi desenvolvido especificamente para a <b>Secretaria de Estado da Saúde da Paraíba (SES-PB)</b> com o intuito de modernizar e conferir maior agilidade ao fluxo de controle de inseticidas utilizados no combate às arboviroses. A solução elimina processos manuais e garante que a vigilância ambiental tenha acesso a informações precisas sobre o estoque de insumos químicos (BTI, Fludora, Alfacipermetrina) em todo o estado em tempo real.
</div>

---

## ⚙️ Arquitetura e Fluxo de Dados

<div align="justify">
O núcleo tecnológico do projeto reside em um algoritmo de roteamento inteligente implementado em <b>Google Apps Script</b>. Ao submeter um formulário, o sistema identifica a Gerência Regional de Saúde (GRS) de origem e realiza a gravação simultânea em dois destinos: na base de dados específica daquela regional e em uma planilha mestre estadual, garantindo integridade e isolamento dos dados.
</div>

<br>

```mermaid
graph TD
    A[Formulário Web App] -->|Validação de Dados| B{Script de Roteamento}
    B -->|Cópia Geral| C[(Planilha Mestre PB)]
    B -->|Filtro por GRS| D[Planilhas Regionais 1 a 12]
    D --> E[Relatórios Locais]
    C --> F[Painel de Vigilância Estadual]
