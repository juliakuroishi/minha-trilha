<?php
$nome = "User";
$idade = 19;

if ($idade >= 18 ){
    echo "Olá, {$nome}, você pode participar do projeto";
} else {
        echo "Olá, {$nome}, você não pode participar do projeto";
}
?>

<?php
$salarioFuncionario = 1200;
$novoSalario = 0;

if ($salarioFuncionario < 1200) {
    $reajuste = 300;
    $novoSalario = $salarioFuncionario + $reajuste;
    echo "Novo salário é {$novoSalario}"; 

} elseif ($salarioFuncionario >= 1200) and ($salarioFuncionario < 1600) { 
    $reajuste = 250;
    $novoSalario = $salarioFuncionario + $reajuste;
    echo "Novo salário é {$novoSalario}";

} else {
    $reajuste = 200;
    $novoSalario = $salarioFuncionario + $reajuste;
    echo "Novo salário é {$novoSalario}";
}
?>