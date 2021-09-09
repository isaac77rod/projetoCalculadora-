function insert(num)
{
    var numero = document.getElementsByClassName('resultado')[0].innerHTML;
    document.getElementsByClassName('resultado')[0].innerHTML = numero + num;
}
function clean()
{
    document.getElementsByClassName('resultado')[0].innerHTML = "";
}
function back()
{
    var resultado = document.getElementsByClassName('resultado')[0].innerHTML;
    document.getElementsByClassName('resultado')[0].innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementsByClassName('resultado')[0].innerHTML;
    if(resultado)
    {
        document.getElementsByClassName('resultado')[0].innerHTML = eval(resultado);
    }
    else
    {
        document.getElementsByClassName('resultado')[0].innerHTML = "Nada..."
    }
}