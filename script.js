```javascript
/* =========================================
   FUNDO 3D INTERATIVO
========================================= */

const canvas = document.getElementById("background3D");

const ctx = canvas.getContext("2d");


/* =========================================
   TAMANHO DA TELA
========================================= */

let width;
let height;

function resizeCanvas() {

    width = canvas.width = window.innerWidth;

    height = canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


/* =========================================
   CONTROLE DO MOUSE
========================================= */

let mouseX = 0;
let mouseY = 0;

let targetMouseX = 0;
let targetMouseY = 0;


document.addEventListener("mousemove", (event) => {

    targetMouseX =
        (event.clientX / width - 0.5) * 2;

    targetMouseY =
        (event.clientY / height - 0.5) * 2;


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
   CONFIGURAÇÃO 3D
========================================= */

const particles = [];

const particleCount =
    window.innerWidth < 700 ? 120 : 220;


const perspective = 500;

const depth = 1200;


/* =========================================
   CRIAR PARTÍCULA
========================================= */

function createParticle() {

    return {

        x:
            (Math.random() - 0.5) *
            width *
            2,

        y:
            (Math.random() - 0.5) *
            height *
            2,

        z:
            Math.random() *
            depth,

        size:
            Math.random() * 2 + 0.5,

        speed:
            Math.random() * 2 + 0.5,

        brightness:
            Math.random()

    };

}


/* Criar partículas */

for (let i = 0; i < particleCount; i++) {

    particles.push(
        createParticle()
    );

}


/* =========================================
   DESENHAR PARTÍCULA
========================================= */

function drawParticle(particle) {

    /*
       Perspectiva 3D
    */

    const scale =
        perspective /
        (perspective + particle.z);


    const x =
        particle.x * scale +
        width / 2;


    const y =
        particle.y * scale +
        height / 2;


    const size =
        particle.size * scale * 3;


    /* Fora da tela */

    if (
        x < -50 ||
        x > width + 50 ||
        y < -50 ||
        y > height + 50
    ) {

        return;

    }


    /* Intensidade */

    const alpha =
        Math.max(
            0.05,
            1 - particle.z / depth
        );


    /*
       Brilho da partícula
    */

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        size,
        0,
        Math.PI * 2
    );


    ctx.fillStyle =
        `rgba(190, 70, 255, ${alpha})`;


    ctx.shadowBlur =
        15 * scale;


    ctx.shadowColor =
        "#b52cff";


    ctx.fill();

}


/* =========================================
   ANIMAÇÃO
========================================= */

function animate() {

    requestAnimationFrame(animate);


    /*
       Movimento suave do mouse
    */

    mouseX +=
        (targetMouseX - mouseX) * 0.035;


    mouseY +=
        (targetMouseY - mouseY) * 0.035;


    /*
       Limpar tela
    */

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /*
       Fundo
    */

    const gradient =
        ctx.createRadialGradient(
            width / 2,
            height / 2,
            0,
            width / 2,
            height / 2,
            width
        );


    gradient.addColorStop(
        0,
        "#260548"
    );


    gradient.addColorStop(
        0.45,
        "#10021d"
    );


    gradient.addColorStop(
        1,
        "#040107"
    );


    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    /*
       Movimento 3D
    */

    particles.forEach(particle => {


        /*
           Mouse influencia a posição
        */

        particle.x +=
            mouseX * 0.25;


        particle.y +=
            mouseY * 0.15;


        /*
           Partícula vem em direção
           ao usuário
        */

        particle.z -=
            particle.speed;


        /*
           Quando chega perto,
           volta para o fundo
        */

        if (particle.z <= 1) {

            particle.z = depth;

            particle.x =
                (Math.random() - 0.5) *
                width *
                2;

            particle.y =
                (Math.random() - 0.5) *
                height *
                2;

        }


        drawParticle(particle);

    });


    ctx.shadowBlur = 0;

}


/* Começar animação */

animate();


/* =========================================
   EFEITO 3D DOS CARDS
========================================= */

const cards =
    document.querySelectorAll("article");


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                centerY) * -2;


            const rotateY =
                ((x - centerX) /
                centerX) * 2;


            card.style.transform = `
                perspective(900px)
                scale(1.02)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "scale(1)";

        }
    );

});
```
