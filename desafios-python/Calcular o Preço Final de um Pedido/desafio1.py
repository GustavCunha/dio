valorHamburguer = float(input())
quantidadeHamburguer = int(input())
valorBebida = float(input())
quantidadeBebida = int(input())
valorPago = float(input())

totalHamb = valorHamburguer * quantidadeHamburguer
totalBeb = valorBebida * quantidadeBebida

total = totalHamb + totalBeb

troco = valorPago - total

print(f'O preço final do pedido é R$ {total:.2f}. Seu troco é R$ {troco:.2f}.')