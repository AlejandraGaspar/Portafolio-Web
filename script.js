var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Alejandra Gaspar')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Estudiante en Ing. Desarrollo y Gestión de Software')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Aspirante a Desarrolladora Profesional!</strong>')
    .pauseFor(1500)
    .start();