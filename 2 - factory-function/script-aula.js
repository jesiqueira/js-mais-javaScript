/*
Factory Function:
São Funções que retornam um objeto sem a necessidade de utilizamos a palavra chave nem. Possiem basicamente a mesma função que contructor functions /classes
*/

function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }

  return Object.freeze({
    element: element,
    text: text,
  });
}

const comprarBtn = createButton('Comprar')
