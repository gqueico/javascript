Javascript

=> Tipos de dados do Javascript
 -> Como funciona a tipagem no Javascript?
      Tipagem de forma dinâmica, sem a necessidade de declarar o tipo de uma variável antes de atribuir valor a mesma. O tipo é definido no processamento do programa.
      É possível reatribuir a uma mesma variável um tipo diferente.

      Exemplo:

    ```javascript
    let adress = 42; // variável do tipo Number
    adress = "bar"; // agora é do tipo String
    adress = true; // agora é um tipo Boolean
    ```

  -> Tipos primitivos
      Diferente dos objetos que possuem referência, ao alterar um dado primitivo é gerado um novo valor, por isso são imutáveis. 

      Mais comuns:
        - Boolean
        - undefined
        - Number
        - String
  
  -> Boolean
      Representa uma entidade lógica **true** ou **false**

      Exemplo:

    ```javascript
    let weekend = false
    ```
  -> undefined 
      Valor atribuído automaticamente a uma variável vazia.
      Undefined é algo que não existe.

      Exemplo:

    ```javascript
    let appointment
    // como nenhum valor foi atribuído a variável ela recebe undefined
    ```
  -> Number
      -> Número
          Pode ser **inteiro** ou **real**

          Exemplo:

      ```javascript
      let age = 12
      // age é um número inteiro
      ```
      -> NaN - Not a Number
          Usado para representar um dado que não é número.

          Exemplo:

        ```javascript
        let notANumber = (25 * 'casa')
        // impossível multiplicar um número por uma string
        ```
      -> Infinity
          Valor simbólico que representa o infinito.
          Precisa ser declarado com o "I" maiúsculo.

          Exemplo:

          ```javascript
          let numberInfinity = (42 / 0)
          // numberInfinity = Infinity
          ```
  -> String
      Cadeia de caracteres - texto

      Exemplo:

    ```javascript
    let name = "Mayk Brito"
    let name = 'Mayk Brito'
    let name = `Mayk ${1 + 1}` // resultado é Mayk 2
    ```
  -> Tipos estruturais
      São diferentes dos tipos primitivos, pois apresentam uma "estrutura" com atributos e métodos.

      Mais comuns:
        - Object
        - Array

  -> Object
      São objetos e possuem atributos (propriedades) e métodos (funcionalidades).

      Exemplo:

    ```javascript
    // aqui é criado um Object copo
    const copo = {
      material: 'vidro', // atributo String
      capacidade: 250, //atributo Number
      cheio: function() {
        // aqui pode declarar um método para o Object
      }
    }
    ```
  -> Array
      Representa um agrupamento de dados em forma de lista.

      Exemplo:

    ```javascript
    // aqui é criado um Array shoppingList
    const shoppingList = {
      'leite',
      'ovos',
      'chocolate',
      2,
      3,
    }
    ```
  -> Tipo primitivo estrutural
      Dados do tipo **null** são primitivos estruturais, pois tem um valor (vazio) que são imutáveis e podem apresentar uma estrutura vazia.
      Null é algo que existe mas é vazio.

      Exemplo:

    ```javascript
    let appointment = null
    ```