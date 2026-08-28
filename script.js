```javascript
/* =========================================
   MODO CLARO / ESCURO
========================================= */

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        darkMode.textContent = "☀";

    } else {

        darkMode.textContent = "☾";

    }

});


/* =========================================
   BRILHO QUE ACOMPANHA O MOUSE
========================================= */

document.addEventListener("mousemove", (event) => {

    document.body.style.setProperty(
        "--mouse-x",
        event.clientX + "px"
    );

    document.body.style.setProperty(
        "--mouse-y",
        event.clientY + "px"
    );

});


/* =========================================
   PARTÍCULAS NEON
========================================= */

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        0.3 + Math.random() * 0.7;

    document.body.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, 15000);

}


/* Cria partículas constantemente */

setInterval(createParticle, 500);


/* =========================================
   BOTÕES DOS DESAFIOS
========================================= */

const buttons =
    document.querySelectorAll(".play-button");


const desafios = [

    {
        titulo: "Flex-direction",
        texto:
            "O conteúdo do article foi organizado em linha utilizando flex-direction: row."
    },

    {
        titulo: "Flex 100%",
        texto:
            "O card utiliza flex: 0 0 100%, fazendo com que ocupe toda a largura disponível."
    },

    {
        titulo: "Align-self",
        texto:
            "O botão utiliza align-self: flex-end para quebrar o alinhamento padrão dos elementos."
    }

];


buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        const desafio = desafios[index];

        alert(
            "✨ " +
            desafio.titulo +
            "\n\n" +
            desafio.texto +
            "\n\n🏆 Desafio concluído!"
        );

    });

});


/* =========================================
   EFEITO 3D NOS CARDS
========================================= */

const cards =
    document.querySelectorAll("article");


cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;


        card.style.transform = `
            scale(1.02)
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "scale(1)";

    });

});


/* =========================================
   CONTADOR DE DESAFIOS
========================================= */

let desafiosConcluidos = 0;


buttons.forEach(button => {

    button.addEventListener("click", () => {

        desafiosConcluidos++;

        if (desafiosConcluidos === 3) {

            setTimeout(() => {

                alert(
                    "🏆 PARABÉNS!\n\n" +
                    "Você concluiu os 3 desafios de Flexbox!"
                );

            }, 300);

        }

    });

});
```
