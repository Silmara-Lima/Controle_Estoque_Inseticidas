/**
 * MAPA DE DESTINOS
 * Substitua os códigos abaixo pelos IDs REAIS das suas planilhas
 */
const MAPA_PLANILHAS = {
  PB: "COLOQUE_AQUI_O_ID_DA_PLANILHA_MESTRA", // Planilha Mestra (Estado)
  1: "COLOQUE_AQUI_O_ID_DA_1GRS",
  2: "COLOQUE_AQUI_O_ID_DA_2GRS",
  3: "COLOQUE_AQUI_O_ID_DA_3GRS",
  4: "COLOQUE_AQUI_O_ID_DA_4GRS",
  5: "COLOQUE_AQUI_O_ID_DA_5GRS",
  6: "COLOQUE_AQUI_O_ID_DA_6GRS",
  7: "COLOQUE_AQUI_O_ID_DA_7GRS",
  8: "COLOQUE_AQUI_O_ID_DA_8GRS",
  9: "COLOQUE_AQUI_O_ID_DA_9GRS",
  10: "COLOQUE_AQUI_O_ID_DA_10GRS",
  11: "COLOQUE_AQUI_O_ID_DA_11GRS",
  12: "COLOQUE_AQUI_O_ID_DA_12GRS",
};

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("SES-PB | Sistema de Estoque Unificado")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

function processarForm(dados) {
  try {
    // 1. Definir os dados da linha
    const municipioFinal =
      dados.tipo === "Recebimento" ? "ESTOQUE CENTRAL" : dados.muni;
    const linha = [
      dados.tipo,
      dados.data,
      municipioFinal,
      dados.prod,
      dados.lote,
      dados.vali,
      parseFloat(dados.qnty),
      `GRS: ${dados.grs}`, // Coluna extra para identificar origem
    ];

    // 2. Salvar na Planilha Mestra (Paraíba)
    const ssPB = SpreadsheetApp.openById(MAPA_PLANILHAS["PB"]);
    ssPB.getSheetByName("Dados").appendRow(linha);

    // 3. Salvar na Planilha da Regional específica
    if (MAPA_PLANILHAS[dados.grs]) {
      const ssRegional = SpreadsheetApp.openById(MAPA_PLANILHAS[dados.grs]);
      ssRegional.getSheetByName("Dados").appendRow(linha);
    }

    return true;
  } catch (erro) {
    throw new Error("Erro no roteamento: " + erro.message);
  }
}
