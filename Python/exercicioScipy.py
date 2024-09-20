#
#  Livro: Fundamentos de Python para Ciência de Dados
#  Capítulo 8 - SCIPY
#
#

from scipy import misc             # pip install scipy 
import matplotlib.pyplot as plt    # pip install matplotli
from scipy import special          # para matematica 
from scipy import stats            # para probabilidade e estatistica

## para carregar imagens:
face = misc.face()  
plt.imshow(face)
plt.show()

a = misc.ascent()
plt.imshow(a)
plt.show()


## para matemática
fatorial = special.factorial(3) 
combinacao = special.comb(10, 2)
permutacao = special.perm(10, 2)
print(fatorial)
print(combinacao)
print(permutacao)