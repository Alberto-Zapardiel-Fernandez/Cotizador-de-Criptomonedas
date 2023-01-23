import { criptomonedasSelect } from './app.js';
const resultado = document.querySelector('#resultado');

/* Función para mostrar alerta en caso de equivocación o error en las peticiones */
export function mostrarAlerta(mensaje) {
  const existeError = document.querySelector('.error');
  if (!existeError) {
    const divMensaje = document.createElement('div');
    divMensaje.className = 'error';
    /* Mensaje de error */
    divMensaje.textContent = mensaje;
    formulario.appendChild(divMensaje);
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

/* Función para mostrar los datos en pantalla */
export function mostrarCotizacionHTML(cotizacion) {
  limpiarHTML();
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement('p');
  precio.classList.add('precio');
  precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement('p');
  precioAlto.innerHTML = `El precio más alto: <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement('p');
  precioBajo.innerHTML = `El precio más bajo: <span>${LOWDAY}</span>`;

  const ultimasHoras = document.createElement('p');
  ultimasHoras.innerHTML = `El precio varió un <span>${CHANGEPCT24HOUR}% en las últimas horas</span>`;

  const ultimaActualizacion = document.createElement('p');
  ultimaActualizacion.innerHTML = `Última actualización: ${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimaActualizacion);
}

/* Función que genera un spinner mientras cargan los datos de la API */
export function mostrarSpinner() {
  limpiarHTML();

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>`;
  resultado.appendChild(spinner);
}

/* Función para crear las opciones y llenar el select una vez tengamos la consulta de las monedas con mayor market cup */
export function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;
    const option = document.createElement('option');

    option.value = Name;
    option.textContent = FullName;
    criptomonedasSelect.appendChild(option);
  });
}

/* Función para limpiar el espacio de resultado para no duplicar resultados */
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
