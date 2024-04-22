def calcularEnderecoBase(chave, m):
    enderecoBase = chave % m
    return enderecoBase

def distribuirChaves(chaves, m):
    for chave in chaves:
        endereco = calcularEnderecoBase(chave, m)
        print(f"{chave} -> {endereco}")

#receber a quantidade de chave (k) e a dimensão da tabela (m)
k, m = map(int, input().split())

chaves = [int(input()) for _ in range(k)]

distribuirChaves(chaves, m)