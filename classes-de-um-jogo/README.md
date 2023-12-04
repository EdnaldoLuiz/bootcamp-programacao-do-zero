# Classes de Jogo

## Objetivo:

Neste projeto, o objetivo é criar uma classe genérica que represente um herói de uma aventura. A classe deve ter as seguintes propriedades:

- **nome**
- **idade**
- **tipo** (ex: guerreiro, mago, monge, ninja)

Além disso, a classe deve conter um método chamado `atacar` que atenda aos seguintes requisitos:

- Exibir a mensagem: "o {tipo} atacou usando {ataque}"
- O {tipo} deve ser concatenado com o valor contido na propriedade da classe
- O {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

  - Se mago -> no ataque exibir (usou magia)
  - Se guerreiro -> no ataque exibir (usou espada)
  - Se monge -> no ataque exibir (usou artes marciais)
  - Se ninja -> no ataque exibir (usou shuriken)

## Saída:

Ao final, a aplicação deve exibir mensagens como:

```bash
o {tipo} atacou usando {ataque}
```
  - Exemplo: mago atacou usando magia
  - Exemplo: guerreiro atacou usando espada

## Implementação:

Utilize as seguintes estruturas em sua implementação:

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Executando o Projeto:

Para executar o projeto, basta seguir as instruções abaixo:

1. **Clonar o repositório:**

```bash
git clone https://github.com/EdnaldoLuiz/bootcamp-programacao-do-zero.git

cd bootcamp-programacao-do-zero
```
