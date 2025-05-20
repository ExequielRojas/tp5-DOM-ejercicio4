function fecha(){
    const fechaActual = new Date()
    const fecha = document.querySelector('#fecha')
    const diaDeSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const mesesDelanio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    const nombreDelDia = diaDeSemana[fechaActual.getDay()];
    const nombreDelMes = mesesDelanio[fechaActual.getMonth()];
    const anio = fechaActual.getFullYear();

    fecha.textContent = `${nombreDelDia} ${fechaActual.getDate()} de ${nombreDelMes} del ${anio}`
}

function hora(){
    const horaActual = new Date()

    const horario = document.querySelector('#hora');

    const hora = horaActual.getHours() < 10 ? '0'+horaActual.getHours() : horaActual.getHours()

    const minutos = horaActual.getMinutes() < 10 ? '0'+horaActual.getMinutes() : horaActual.getMinutes();

    const segundos = horaActual.getSeconds() < 10 ? '0'+horaActual.getSeconds() : horaActual.getSeconds();


    horario.textContent = `${hora}:${minutos}:${segundos}`;
}

fecha()
setInterval(hora, 1000);