# Exemplo de SQS + Lambda + NodeJS

Esta aplicação faz o envio de dados para uma fila SQS e o lambda faz a leitura desta fila para realizar o processamento necessário.

### Chamando o SQS para inserir na fila
Para ver o conteúdo, verifique o arquivo sqs-generator
```
npm run start
```

### Rodar localmente

```
serverless invoke local -f document-validation -l
```

## Criação e atualização da function

Para que seja possível fazer o deploy ou a atualização, deve-se configurar as variaveis de ambiente.

```
export AWS_ACCESS_KEY_ID=AKIAWCHAVEAQUIGTWDEG
export AWS_SECRET_ACCESS_KEY=Y27UGSuaAccessVemAquiFnMlmh8v3FjVhFvdb
```
### Fazer deploy(atualizar) da function

```
serverless deploy function -f document-validation
```

### Como criar sua própria function

```
serverless create --template aws-nodejs --path my-service
```

