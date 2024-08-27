<?php
$arrayEstados = ["MS", "MT", "GO", "DF"];
$nome = ""; //o melhor seria usar o filter_input
$estados = "";


if (isset($_POST("nomeUser"))){  //isset verifica se a var existe
    $nome = $_POST["nomeUser"]; //no campo input nome, essa variável vai receber esse nome
    echo $nome;
}

if (isset($_POST("select-estados"))){  
    $estados = $_POST["select-estados"]; 
    echo $nome;
}

?>


<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>Formulário</title>
</head>
<body>
    <h1>Formulário</h1>
    <form>

        <div class="mb-3">
            <label for="nomeUser" class="form-label">Qual seu nome? </label>
            <input type="name" class="form-control" id="nomeUser" name="nomeUser">
        </div>
        <label for="estados">Selecione um estado:</label>
        <select name="select-estados" id="carestadoss"> 
            <?php
                for ($i = 0; $i < count($arrayEstados); $i++) {
            ?>

            <option value=" <?= $i; ?> " > <?= $arrayNome[$i]; ?> </option>
           <!-- <option value="MT">MT</option>  assim seria com o html somente-->
            <?php
        }
        ?>
        <button type="submit">Cadastrar</button>
</select>
</form>


</body>
</html>
<?php  ?>