function presentarData()
{
  var vnombrePersona=document.getElementById("nombre").value;

  if (vnombrePersona === '')
  {
    document.getElementById("resultado").innerHTML="No digitaste tu nombre <br>";
  }
  else
  {
    document.getElementById("resultado").innerHTML=vnombrePersona + '<br>';
  }

  var vseleccionado = false;
  var vdeporte = document.getElementById('deporte1').checked;
  if (vdeporte === true)
  {
    document.getElementById("resultado").innerHTML+="Te gusta el Basketball <br>";
    vseleccionado = true;
  }

  vdeporte = document.getElementById('deporte2').checked;
  if (vdeporte === true)
  {
    document.getElementById("resultado").innerHTML+="Te gusta el Football<br>";
    vseleccionado = true;
  }

  vdeporte = document.getElementById('deporte3').checked;
  if (vdeporte === true)
  {
    document.getElementById("resultado").innerHTML+="Te gusta el Tenis<br>";
    vseleccionado = true;
  }

  if (vseleccionado === false)
  {
    document.getElementById("resultado").innerHTML+="No te gusta ninguno de estos deportes.<br>";
  }
  
}

function eventoBasketClickPresionado()
{
  document.getElementById("itemBasket").style.fontSize = "20px";
  document.getElementById("itemBasket").innerHTML="Basketball (mouse pulsandose)";
}

function eventoBasketClickLiberado()
{
  document.getElementById("itemBasket").style.fontSize = "20px";
  document.getElementById("itemBasket").innerHTML="Basketball (mouse liberado)";
}

function eventoFootballEntre()
{
 document.getElementById("itemFootball").innerHTML="Football (mouse entre)";

}

function eventoFootballSali()
{
 document.getElementById("itemFootball").innerHTML="Football (mouse sali)";

}

function eventoFocusNombre()
{
  document.getElementById("nombre").placeholder="Tengo el foco de atencion";
}

function eventoSinFocoNombre()
{
  document.getElementById("nombre").placeholder="Ups, perdi el foco.";
}

function eventoTenisClick()
{
  document.getElementById("itemTenis").style.color = "red";
  document.getElementById("itemTenis").innerHTML="Tenis (cambie a color rojo)";
}

function restaurarEstilos()
{
    document.getElementById("nombre").placeholder="Digita aqui";
  
document.getElementById("itemBasket").style.fontSize = "16px";
  document.getElementById("itemBasket").innerHTML="Basketball";

document.getElementById("itemFootball").innerHTML="Football";

 document.getElementById("itemTenis").innerHTML="Tenis";
   
 document.getElementById("itemTenis").style.color = "black";

}


