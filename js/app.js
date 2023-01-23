/* Imports de métodos */
import { mostrarAlerta } from './UI.js';
import { consultarCriptomonedas, consultarAPI } from './peticiones.js';

/* Export de variables necesarias */
export const criptomonedasSelect = document.querySelector('#criptomonedas');
export const objBusqueda = {
  moneda: '',
  criptomoneda: '',
};
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');

/* Listeners de funciones a ejecutar */
document.addEventListener('DOMContentLoaded', () => {
  consultarCriptomonedas();
  formulario.addEventListener('submit', submitFormulario);
  criptomonedasSelect.addEventListener('change', leerValor);
  monedaSelect.addEventListener('change', leerValor);
});

/* Función de comprobación de datos en el submit */
function submitFormulario(e) {
  e.preventDefault();
  /* Destructuring del objeto búsqueda */
  const { moneda, criptomoneda } = objBusqueda;
  if (moneda === '' || criptomoneda === '') {
    mostrarAlerta('Ambos campos son obligatorios');
  }

  /* Consultar API con los resultados */
  consultarAPI();
}

/* Función para asingar los valores de los selects a un objeto */
function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}
