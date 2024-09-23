#
# função para criar um dataframe 


import pandas as pd
from typing import List

# GENERICO:
# def criarDF(meus_dados: List[List]) -> pd.DataFrame:
#     nome_colunas = []
#     nome_indice = []
    

# def criarDF() --> isso eh uma função python e seu nome
# (meus_dados: List[List[int]]) {
#    meus_dados --> argumento que vai passar os dados
#     O tipo List[List[int]] indica que meus_dados deve ser uma lista de elementos, onde cada elemento é uma lista que contém inteiros.
#       vamos usar entao List[List]
#   }
#
#


# Definindo a função que cria o DataFrame
def criarDF(pratos: List[List]) -> pd.DataFrame:
    # Nome das colunas do DataFrame
    nome_colunas = ['Prato', 'País de origem', 'Preço']
    
    # Criando o DataFrame a partir dos dados recebidos e colunas definidas
    df = pd.DataFrame(pratos, columns=nome_colunas)
    
    # Retornando o DataFrame criado
    return df

# Lista de pratos culinários
pratos = [
    ['Sushi', 'Japão', 25.0],  # Prato 1
    ['Tacos', 'México', 10.0],  # Prato 2
    ['Pizza', 'Itália', 15.0],  # Prato 3
    ['Curry', 'Índia', 20.0],   # Prato 4
    ['Feijoada', 'Brasil', 30.0] # Prato 5
]



# Usando a função para criar o DataFrame
df_pratos = criarDF(pratos)

# Exibindo o DataFrame resultante convertido em string e sem o indice automatico
print(df_pratos.to_string(index=False))
