<?php

echo "Olá, mundo"; //imprime valor na tela echo"";
$nome = "Julia";  //para declarar variável, usar o $ antes do nome 
$saudacao = "Oi,";
echo $saudacao . $nome; // para concatenar, usar . 



//operações aritméticas
$a = 5;
$b = 7;
//$soma = a + b - observe que esta soma está errada. cade o $ das variaveis
$soma = $a + $b; // nao esquecer do ; ao final de cada linha
echo $soma; 

$subtracao = $b - $a;
$multiplicacao = $a * $b;
$expressao = ($a + $b) % 7;

// array
$operacoes = array($soma, $subtracao, $multiplicacao, $expressao);
$comprimento = sizeof($operacoes);

// comando foreach
for($i = 0; $i < $comprimento; $i += 1){
    echo "Os resultados sao: {$operacoes[$i]}";

}

// varias operações
$varias_operacoes = array(
    "soma" => $soma,
    "subtracao" => $subtracao,
    "multiplicacao" => $multiplicacao,
    "expressao" => $expressao,

);


// função
$nome = "";

function saudar($nome){  // toda a função fica dentro de chaves
    echo "Bem vindo, {$nome}";
}
    

?>