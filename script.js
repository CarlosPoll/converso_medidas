function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  console.log(vMoeda);
  let variavel = vMoeda;
  if (variavel == "NM") {
    console.log(variavel);
    var valorEmReal = valorEmDolarNumerico * 1.852;
  } else {
    var valorEmReal = valorEmDolarNumerico * 1.609;
  }
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado  é  " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Moeda() {
  var tipoMoeda = document.getElementById("moeda");
  vMoeda = tipoMoeda.value;
  console.log(vMoeda);
  return vMoeda;
}
//console.log(vMoeda);