const fibonnacci = (meta) => {
  let sequencia = [1 ,1]
  let resultado 
  for (let i = 2; i < meta; i++) {
    resultado = sequencia[i-1] + sequencia[i-2] 
    sequencia.push(resultado)
  }
  return sequencia
}

console.log(fibonnacci(10));
