# CRUD com PHP e PDO: Conceitos e Exemplo de Código

## 1. Conexão com o Banco de Dados
```php
$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
```
PDO: Para se conectar a um banco de dados usando PDO, criamos uma instância da classe PDO com parâmetros como o tipo de banco (mysql), o host, o dbname (nome do banco de dados), username (usuário do banco) e password (senha do banco).
```setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)```: Define um atributo na conexão. No caso, estamos configurando o atributo ```PDO::ATTR_ERRMODE ``` para ``` PDO::ERRMODE_EXCEPTION```, o que significa que qualquer erro de banco de dados será tratado como uma exceção. Isso ajuda a depurar problemas, pois exibe mensagens de erro detalhadas.

## 2. Statements Preparados (Prepared Statements)
```php
$sql = "INSERT INTO Pessoa (nome, cidade) VALUES (:nome, :cidade)";
$stmt = $pdo->prepare($sql);
```
``Prepared Statements:`` São instruções SQL pré-compiladas, que permitem a execução eficiente e segura de consultas. Eles são especialmente úteis quando precisamos executar a mesma consulta várias vezes com diferentes valores.
##### No exemplo: 
A função `prepare()` cria uma versão compilada do SQL que o banco de dados pode executar repetidamente. Os placeholders :nome e :cidade serão substituídos pelos valores reais mais tarde, usando bindParam().

## 3. Placeholders e bindParam()
```php
$stmt->bindParam(':nome', $nome);
$stmt->bindParam(':cidade', $cidade);
```

Placeholders: No PDO, os placeholders são marcadores em uma instrução SQL que representam valores. Eles começam com : e são seguidos pelo nome do parâmetro (ex.: :nome, :cidade).
`bindParam()`: Associa uma variável ao placeholder na consulta preparada, substituindo o marcador pelo valor. Isso não só torna o código mais legível, mas também protege contra SQL Injection, pois os valores são tratados de forma segura.

## 4. Execução de Consultas com execute()
```php
$stmt->execute();
```
Após preparar a consulta e associar os valores aos placeholders, chamamos execute() para executá-la.
A função execute() é utilizada para realizar a ação no banco de dados (como INSERT, UPDATE, DELETE ou SELECT).

## 5. Recuperação de Dados (fetch() e fetchAll())
```php
$pessoa = $stmt->fetch(PDO::FETCH_ASSOC);
```
`fetch()`: Quando fazemos uma consulta (SELECT) para recuperar um registro específico, usamos fetch() para obter o primeiro (e, neste caso, único) registro.
O `PDO::FETCH_ASSOC` instrui o `fetch()` a retornar os dados em forma de array associativo (com as colunas como chaves). Isso facilita o acesso aos valores.
`fetchAll()`: Quando queremos recuperar múltiplos registros de uma vez, usamos `fetchAll()`.

## 6. Tratamento de Exceções com try e catch
```php
try {
    $pdo = new PDO(...);
    // código do CRUD
} catch (PDOException $e) {
    die("Erro de conexão: " . $e->getMessage());
}
```
O uso de try e catch permite lidar com erros no banco de dados de forma controlada. Se uma operação falhar, o erro será capturado e tratado no bloco catch.
O PDOException é uma classe de exceção específica para erros relacionados ao PDO, útil para tratamento de erros e depuração.

## 7. Desconectar do Banco de Dados
```php
$pdo = null;
```
O PHP encerra automaticamente a conexão ao final do script. No entanto, se precisar fechar a conexão explicitamente, basta definir a variável de conexão como null.
Isso libera os recursos alocados para a conexão imediatamente, o que pode ser importante em scripts longos ou de uso intensivo de recursos.
