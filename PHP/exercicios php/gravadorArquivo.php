<?php
// criador e gravador de arquivo

//$meu_arquivo = "file.txt"; //meu arquivo recebe nome do arquivo + extensão
// este codigo de cima foi passado como parametro da função pois a função nao esta reconhecendo a variavel global

//agora preciso criar uma função que cria na prática

function criador(string $texto, string $meu_arquivo){
    //abrir o arquivo:
    $fp = fopen ($meu_arquivo, "a+");  // var fp recebe conexão com o arquvio e tipo de ação (a+) 

    //escrever no arquivo:
    fwrite($fp, "{$texto} <br>\r\n"); //esse texto eh o parametro que está na função. ao chamar a função, eu escrevo o texto que será do parametro
                                        // <br>\r\n = para dar uma quebra de linha entre as writes
    //fechar o arquivo
    fclose($fp);
}

//chamar a função com algum texto:
criador("Estou gravando uma linha de texto no meu arquivo", "file.txt");

// -------- posso ler tambem o arquivo:
function leitor(string $meu_arquivo){
    $fp = fopen ($meu_arquivo, "r"); //preciso criar a variavel fp dnv pois ela nao eh variavel global
    $texto = fread($fp, filesize($meu_arquivo)); //var texto armazena o texto 
    fclose("$fp");
    return $texto;

echo leitor("$meu_arquivo");
}

/* 
posso acessar essas funções de outro doc. por exemplo, se eu tenho um doc chamado index.php e eu preciso dessas funções, eu faço o seguinte:
    (estou no arquivo index.php)
        include("gravadorArquivo.php") - ligo meu index.php com o gravadorArquivo.php
        criador ("escreva este trecho para mim", )

*/
?>