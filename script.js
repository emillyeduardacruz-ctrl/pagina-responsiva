```javascript
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        darkMode.textContent = "☀";

    } else {

        darkMode.textContent = "☾";

    }

});


/* Botões dos desafios */

const buttons = document.querySelectorAll(".play-button");

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const desafios = [
            "O desafio 1 utiliza flex-direction: row para colocar os elementos lado a lado.",
            "O desafio 2 utiliza flex: 0 0 100% para fazer o card ocupar toda a largura.",
            "O desafio 3 utiliza align-self para modificar o alinhamento de um elemento."
        ];

        alert(desafios[index]);

    });

});
```
