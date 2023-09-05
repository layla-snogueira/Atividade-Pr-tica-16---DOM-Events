function getValueElement(ElementID) {
    return Number(document.getElementById(ElementID).value);
    
}
function setValueElement(ElementID, value) {
    document.getElementById(ElementID).value = value;
}

function calcular() {
    //valor da Receita
    const valorBase = getValueElement("valor_base");
    const valorTransporte = getValueElement("valor_transporte");
    const valorAlimentacao = getValueElement("valor_alimentacao");
    const valorReceita = valorBase + valorTransporte + valorAlimentacao
    setValueElement ("valor_receita", valorReceita)
    
    //valor dos Descontos
    const valorAutomovel = getValueElement("valor_automovel");
    const Faltas = getValueElement("faltas");
    const ValorDescontos = valorAutomovel + Faltas
    setValueElement("valor_descontos", ValorDescontos)

    //Valor Total
    const ValorTotal = valorReceita-ValorDescontos
    setValueElement("valor_total", ValorTotal)

}

document.addEventListener(input, "calcular")
