<?php 
$frutas = ["Kiwi", "Mexerica", "Laranja", "Morango", "Limão", "Tamarindo"];
$componentes_pc = ["Mouse", "Teclado", "Monitor", "Gabinete", "Estabilizador", "Caixa de Som"];
echo $componentes_pc[1];
echo $componentes_pc[3];
?>

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Array</title>
</head>
<body>
    <h3>Array</h3>
    <p>Selecione uma fruta:</p>
    <select>
        <?php
            for ($i=0; $i < count($frutas); $i++){ 
        ?>
        
        <option value="<?= $i;?>"> <?= $frutas; ?> </option>
        <?php } ?>
    </select>
</body>
</html>