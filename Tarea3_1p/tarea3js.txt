function validarFormulario() {
    const cedula = document.getElementById('cedula').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    let esValido = true;

    // Limpiar mensajes de error previos
    document.getElementById('cedulaError').textContent = '';
    document.getElementById('telefonoError').textContent = '';
    document.getElementById('successMessage').style.display = 'none';

    // Validar la cédula: 10 dígitos numéricos
    if (!/^[0-9]{10}$/.test(cedula)) {
        document.getElementById('cedulaError').textContent = 'No válido, ingrese 10 dígitos numéricos';
        document.getElementById('cedulaError').style.display = 'block';
        esValido = false;
    }

    // Validar el teléfono: 10 dígitos
    if (!/^[0-9]{10}$/.test(telefono)) {
        document.getElementById('telefonoError').textContent = 'No válido, ingrese 10 dígitos numéricos';
        document.getElementById('telefonoError').style.display = 'block';
        esValido = false;
    }

    // Validar el correo electrónico
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Si todo es válido, mostrar el mensaje de éxito
    if (esValido) {
        document.getElementById('successMessage').style.display = 'block';
        return false; // Para evitar que el formulario se envíe automáticamente
    }

    return false;
}
