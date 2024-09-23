#
#  Livro: Fundamentos de Python para Ciência de Dados
#  Capítulo 9 - Pandas
#  --> Exercícios de Data Frame
#

# Importando a biblioteca pandas
import pandas as pd

# Criando um DataFrame vazio
DFvazio = pd.DataFrame()

# Exibindo o DataFrame vazio, que não terá linhas nem colunas
print(DFvazio)
# Saída: Empty DataFrame (mostra que o DataFrame não contém dados)


# Criando um DataFrame a partir de um dicionário
nome_do_aluno = ['roberto', 'paulo', 'joao', 'pedro', 'julia']  # Lista com nomes dos alunos
notas = [100, 70, 88, 45, 92]  # Lista com as notas correspondentes

# Dicionário que associa os nomes dos alunos às suas respectivas notas
data = {
    'aluno': nome_do_aluno,
    'nota': notas
}

# Criando o DataFrame 'escola' a partir do dicionário
escola = pd.DataFrame(data)

# Exibindo o DataFrame 'escola', que terá duas colunas: 'aluno' e 'nota'
print(escola)
# Saída: Um DataFrame com nomes e notas dos alunos


# Criando um DataFrame a partir de uma lista de listas
# Cada sublista representa uma linha (um livro com suas informações: nome, gênero e ano)
dados = [
    ['O Senhor dos Anéis', 'Fantasia', 1954],
    ['1984', 'Distopia', 1949],
    ['Dom Casmurro', 'Romance', 1899]
]

# Definindo os nomes das colunas
colunas = ['Livro', 'Gênero', 'Ano']

# Criando o DataFrame 'filmes' a partir da lista 'dados' e as colunas definidas
filmes = pd.DataFrame(dados, columns=colunas)

# Exibindo o DataFrame 'filmes', que terá três colunas: 'Livro', 'Gênero', e 'Ano'
print(filmes)
# Saída: Um DataFrame com três linhas (livros) e três colunas (Livro, Gênero, Ano)
