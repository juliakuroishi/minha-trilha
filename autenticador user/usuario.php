<?php

class Usuario {
    private $nome;
    private $email;
    private $senha;

//set = atribuir
//get = obter

    public function setNome($nome){
        $this->nome = $nome;
    }

    public function getNome(){
        retunr $this->nome; 
    }

    public function setNome($email){
        $this->email = $email;
    }

    public function getNome(){
        retunr $this->email; 
    }
    
    public function setNome($senha){
        $this->senha = md5($senha);
    }

    public function getNome(){
        retunr $this->senha; 
    }
}
?>