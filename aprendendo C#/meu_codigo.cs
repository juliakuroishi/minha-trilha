// Minhas primeiras linhas de código em C#
Console.WriteLine("Hello, World! Estou aprendendo C#!");

//Exercício para treinar os tipos em C#

string nome = "Júlia";
int idade = 23;
char inicial = 'K';
bool estudante = true;

Console.WriteLine($"Olá, meu nome é {nome} e tenho {idade} anos. A letra inicial do meu sobrenome é {inicial}. Estou na faculdade: {estudante}");


//Exercício para treinar listas

List <string> materias_cursadas = new List<string> {"Algoritmos_1", "Cálculo", "Introdução à conceitos de Computação"};

materias_cursadas.Add("Algoritmos_2");
materias_cursadas.Add("Fundamentos Web");

foreach (var materias in materias_cursadas)
{
    Console.WriteLine(materias);
}