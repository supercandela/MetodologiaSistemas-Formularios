// Obtenemos el dropdown y el contenedor para el horario
const subjectDropdown = document.getElementById("materia");
const scheduleContainer = document.getElementById("schedule");

// Objeto con horarios para cada materia
const schedules = {
  metodologiaSistemas: [
    "Lunes 9:00 - 11:00",
    "Miércoles 10:00 - 12:00",
    "Viernes 13:00 - 15:00",
  ],
  laboratorio4: ["Martes 8:00 - 10:00", "Jueves 14:00 - 16:00"],
  baseDatos: ["Lunes 12:00 - 14:00", "Viernes 10:00 - 12:00"],
  pps: ["Lunes 12:00 - 14:00", "Viernes 10:00 - 12:00"],
};

// Evento al cambiar el dropdown
subjectDropdown.addEventListener("change", (event) => {
  const selectedSubject = event.target.value;
  displaySchedule(selectedSubject);
});

// Función para mostrar los horarios según la selección
function displaySchedule(subject) {
  // Limpiar contenido previo
  scheduleContainer.innerHTML = "";

  // Si no hay materia seleccionada, terminar
  if (!subject || !schedules[subject]) return;

  // Crear los elementos de opción de horario
  schedules[subject].forEach((schedule, index) => {
    // Crear el input de tipo radio
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "schedule"; // mismo nombre para que sólo se pueda seleccionar uno
    radio.value = schedule;
    radio.id = `scheduleOption${index}`;

    // Crear la etiqueta para el radio
    const label = document.createElement("label");
    label.htmlFor = radio.id;
    label.textContent = schedule;

    // Añadir el radio y la etiqueta al contenedor
    scheduleContainer.appendChild(radio);
    scheduleContainer.appendChild(label);
    scheduleContainer.appendChild(document.createElement("br")); // Salto de línea para organizar visualmente
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  // Obtener el año actual y setearlo en el footer
  const anioActual = new Date().getFullYear();
  document.getElementById("anio").textContent = anioActual;
});
