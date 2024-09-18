#
#   Livro: Fundamentos de Python para Ciência de Dados
#   Capítulo 7 - Criando arrays
#

import numpy as np

# Criando um array a partir de uma lista
lista = [1, 2, 3, 4]
array = np.array(lista)

print("Criar array a partir de lista:")
print(array)

# Criando um array de zeros
zeros = np.zeros((2, 3))  # array 2x3
print("\nArray de zeros:")
print(zeros)

# Criando um array de uma sequência de números
sequencia = np.arange(0, 100, 10)  # de 0 a 100, mas de 10 em 10
print("\nSequencia de 0 a 100:")
print(sequencia)

# Alterando a forma de um array
array = np.array([1, 2, 3, 4, 5, 6])
reshape_array = array.reshape((2, 3))  # transforma em uma matriz 2x3
print("\nReshape:")
print(reshape_array)

zeros2d = zeros.reshape(3,2)
print("\nReshape:")
print(zeros2d)
# Mudar valor de um elemento:,
print("\nAlterar elemento:")
zeros2d[1,1] = 1
print(zeros2d)


##
# A forma fornecida a um array deve ser consistente com o número de elementos nele. 
# Por exemplo, se você tem o array com 12 elementos e tenta definir suas dimensões com uma forma que não inclui 12 elementos, obtém um erro


##
# 3D:
##
#          (n_linhas, n_colunas, n_dimensoes)

#  array = [[ [1. 1.]   # -> 3 linhas (horizontal)
#           [1. 1.]   #-> 2 colunas (vertical)
#           [1. 1.]]  #-> 1ª camada (primeira dimensão)

#          [[1. 1.]   #-> 3 linhas (horizontal)
#           [1. 1.]   #-> 2 colunas (vertical)
#           [1. 1.]]] #-> 2ª camada (segunda dimensão)

arrayRange = np.arange(20)
print("\n Cria um array de 20 elemento mas imprime do índice 2 a 10-1:")
print(arrayRange[2:10]) # imprime do incide 2 ate 10-1

# filtrar array
arrayAntes = np.arange(21).reshape(3, 7)
print("\n Array antes da filtragem:")
print(arrayAntes)

# Máscara booleana
arrayBool = np.array([[True, False, True, True, False, True, False],
                        [True, False, True, True, False, True, False],
                        [True, False, True, True, False, True, False]])

# Aplicando a máscara booleana
arrayFiltrado = arrayAntes[arrayBool]
print("\nArray filtrado com a máscara booleana:")
print(arrayFiltrado)

mascaraPares = arrayAntes % 2 == 0
print("\nMáscara booleana para números pares:")
print(mascaraPares)

# Aplicando a máscara booleana
arrayPares = arrayAntes[mascaraPares]
print("\nArray filtrado com números pares:")
print(arrayPares)