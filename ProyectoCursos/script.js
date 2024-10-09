function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    if (nombre === "" || apellido === "" || correo === "" || contrasena === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita el envío del formulario
    }

    // Simulación de registro exitoso
    alert("Registro exitoso. ¡Bienvenido " + nombre + "!");
    return true; // Permite el envío del formulario
}

const categorias = [
    {
        nombre: "Desarrollo Web",
        cursos: [
            { nombre: "HTML para Principiantes", nivel: "Principiante", duracion: "10 horas", precio: "Gratis" },
            { nombre: "CSS Avanzado", nivel: "Intermedio", duracion: "20 horas", precio: "$50" },
            { nombre: "JavaScript desde Cero", nivel: "Avanzado", duracion: "30 horas", precio: "$100" },
            { nombre: "React para Principiantes", nivel: "Básico", duracion: "5 horas", precio: "Gratis" },
            { nombre: "Node.js para Backend", nivel: "Experto", duracion: "40 horas", precio: "$150" }
        ]
    },
    {
        nombre: "Diseño Gráfico",
        cursos: [
            { nombre: "Photoshop desde Cero", nivel: "Principiante", duracion: "15 horas", precio: "$30" },
            { nombre: "Illustrator Básico", nivel: "Intermedio", duracion: "25 horas", precio: "$60" },
            { nombre: "Diseño de Logotipos", nivel: "Avanzado", duracion: "35 horas", precio: "$120" },
            { nombre: "Creación de Páginas Web", nivel: "Básico", duracion: "10 horas", precio: "Gratis" },
            { nombre: "Animación con After Effects", nivel: "Experto", duracion: "50 horas", precio: "$200" }
        ]
    },
    {
        nombre: "Marketing Digital",
        cursos: [
            { nombre: "SEO Básico", nivel: "Principiante", duracion: "15 horas", precio: "$30" },
            { nombre: "Publicidad en Redes Sociales", nivel: "Intermedio", duracion: "25 horas", precio: "$60" },
            { nombre: "Email Marketing", nivel: "Avanzado", duracion: "35 horas", precio: "$120" },
            { nombre: "Analítica Web", nivel: "Básico", duracion: "10 horas", precio: "Gratis" },
            { nombre: "Marketing de Contenidos", nivel: "Experto", duracion: "50 horas", precio: "$200" }
        ]
    },
    {
        nombre: "Fotografía",
        cursos: [
            { nombre: "Fotografía Digital", nivel: "Principiante", duracion: "15 horas", precio: "$30" },
            { nombre: "Edición de Fotos", nivel: "Intermedio", duracion: "25 horas", precio: "$60" },
            { nombre: "Fotografía de Retrato", nivel: "Avanzado", duracion: "35 horas", precio: "$120" },
            { nombre: "Técnicas de Composición", nivel: "Básico", duracion: "10 horas", precio: "Gratis" },
            { nombre: "Fotografía de Paisajes", nivel: "Experto", duracion: "50 horas", precio: "$200" }
        ]
    },
    {
        nombre: "Desarrollo Personal",
        cursos: [
            { nombre: "Gestión del Tiempo", nivel: "Principiante", duracion: "15 horas", precio: "$30" },
            { nombre: "Comunicación Efectiva", nivel: "Intermedio", duracion: "25 horas", precio: "$60" },
            { nombre: "Liderazgo", nivel: "Avanzado", duracion: "35 horas", precio: "$120" },
            { nombre: "Inteligencia Emocional", nivel: "Básico", duracion: "10 horas", precio: "Gratis" },
            { nombre: "Habilidades de Negociación", nivel: "Experto", duracion: "50 horas", precio: "$200" }
        ]
    }
];

// Generar categorías y cursos
document.addEventListener('DOMContentLoaded', () => {
    const categoriasContainer = document.getElementById('categorias');
    categorias.forEach((categoria, index) => {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('categoria');
        categoriaDiv.innerHTML = `<h3 onclick="mostrarCursos('cursos-${index}')">${categoria.nombre}</h3>`;
        
        const cursosList = document.createElement('ul');
        cursosList.id = `cursos-${index}`;
        cursosList.classList.add('cursos');
        categoria.cursos.forEach((curso, cursoIndex) => {
            const cursoItem = document.createElement('li');
            cursoItem.innerHTML = `<a href="#" onclick="mostrarDetalles('${curso.nombre}', '${curso.nivel}', '${curso.duracion}', '${curso.precio}')">${curso.nombre}</a>`;
            cursosList.appendChild(cursoItem);
        });

        categoriaDiv.appendChild(cursosList);
        categoriasContainer.appendChild(categoriaDiv);
    });
});

// Redireccionar al panel de usuario al enviar el formulario de registro
document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera convencional
    // Aquí puedes agregar más validaciones si es necesario
    window.location.href = "panel_usuario.html"; // Redirige al panel de usuario
});

let inscripcionContador = 0;
let mensajeInscripcion = ""; // Variable para almacenar el mensaje de inscripción

function mostrarCursos(categoria) {
    // Ocultar todas las categorías de cursos
    const todasLasCategorias = document.querySelectorAll('.cursos');
    todasLasCategorias.forEach(c => c.style.display = 'none');

    // Mostrar la categoría seleccionada
    document.getElementById(categoria).style.display = 'block';
}

function mostrarDetalles(nombreCurso, nivel, duracion, precio) {
    const infoCurso = `Curso: ${nombreCurso}\nNivel: ${nivel}\nDuración: ${duracion}\nPrecio: ${precio}`;
    alert(infoCurso); // Muestra la información del curso en una ventana emergente

    // Muestra la sección de detalles del curso
    document.getElementById('detalle-curso').style.display = 'block';
}

function inscribir() {
    inscripcionContador++;
    const mensajeArea = document.getElementById('info-curso'); // Asegúrate de tener un elemento para mostrar mensajes

    if (inscripcionContador % 2 !== 0) {
        mensajeInscripcion = "¡Felicidades, ve a por ello!";
    } else {
        mensajeInscripcion = "Error de inscripción";
    }

    mensajeArea.innerHTML = mensajeInscripcion; // Actualiza el mensaje en el área de mensajes
}

function reportarFallo() {
    alert("Reporte enviado"); // Muestra el mensaje de reporte enviado
}








