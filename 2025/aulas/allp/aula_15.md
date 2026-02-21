
# Funções com Arrays em Python

As listas em Python possuem diversas **funções úteis** para manipular seus elementos.  
A seguir, estão as principais funções, suas descrições e exemplos práticos.

---

## 1. **append()**
**Descrição:** Adiciona um elemento **ao final da lista**.

```python
frutas = ["maçã", "banana", "uva"]
frutas.append("laranja")
print(frutas)
```
**Saída:**
```
['maçã', 'banana', 'uva', 'laranja']
```

---

## 2. **clear()**
**Descrição:** Remove **todos os elementos** da lista, deixando-a vazia.

```python
numeros = [1, 2, 3, 4]
numeros.clear()
print(numeros)
```
**Saída:**
```
[]
```

---

## 3. **copy()**
**Descrição:** Cria uma **cópia** da lista.

```python
animais = ["gato", "cachorro", "pássaro"]
copia = animais.copy()
print(copia)
```
**Saída:**
```
['gato', 'cachorro', 'pássaro']
```
> 💡 Modificar a cópia não afeta a lista original.

---

## 4. **count()**
**Descrição:** Retorna o **número de vezes** que um valor aparece na lista.

```python
numeros = [1, 2, 2, 3, 2, 4]
print(numeros.count(2))
```
**Saída:**
```
3
```

---

## 5. **extend()**
**Descrição:** Adiciona **os elementos de outra lista (ou iterável)** ao final da lista atual.

```python
lista1 = [1, 2, 3]
lista2 = [4, 5, 6]
lista1.extend(lista2)
print(lista1)
```
**Saída:**
```
[1, 2, 3, 4, 5, 6]
```

---

## 6. **index()**
**Descrição:** Retorna o **índice da primeira ocorrência** de um valor na lista.

```python
nomes = ["Ana", "Bruno", "Carla", "Bruno"]
print(nomes.index("Bruno"))
```
**Saída:**
```
1
```
> ⚠️ Se o valor não existir, o Python gera um erro `ValueError`.

---

## 7. **insert()**
**Descrição:** Insere um elemento em uma **posição específica** da lista.

```python
cores = ["vermelho", "azul", "verde"]
cores.insert(1, "amarelo")
print(cores)
```
**Saída:**
```
['vermelho', 'amarelo', 'azul', 'verde']
```

---

## 8. **pop()**
**Descrição:** Remove e retorna o elemento de uma **posição específica** (ou o último, se nenhum índice for informado).

```python
frutas = ["maçã", "banana", "uva"]
frutas.pop(1)
print(frutas)
```
**Saída:**
```
['maçã', 'uva']
```
> 💡 `pop()` também pode ser usado sem argumento para remover o último item:
> ```python
> frutas.pop()
> ```

---

## 9. **remove()**
**Descrição:** Remove a **primeira ocorrência** de um valor na lista.

```python
numeros = [10, 20, 30, 20]
numeros.remove(20)
print(numeros)
```
**Saída:**
```
[10, 30, 20]
```

---

## 10. **reverse()**
**Descrição:** Inverte a **ordem dos elementos** na lista.

```python
numeros = [1, 2, 3, 4]
numeros.reverse()
print(numeros)
```
**Saída:**
```
[4, 3, 2, 1]
```

---

## 11. **sort()**
**Descrição:** Ordena os elementos da lista em **ordem crescente** (ou decrescente, se especificado).

```python
valores = [3, 1, 4, 2]
valores.sort()
print(valores)
```
**Saída:**
```
[1, 2, 3, 4]
```
> 💡 Para ordenar em ordem decrescente:
> ```python
> valores.sort(reverse=True)
> ```

---

## Dica Extra

Você pode combinar esses métodos para criar manipulações mais complexas:

```python
dados = [5, 3, 9]
dados.append(1)
dados.sort()
dados.reverse()
print(dados)
```
**Saída:**
```
[9, 5, 3, 1]
```
