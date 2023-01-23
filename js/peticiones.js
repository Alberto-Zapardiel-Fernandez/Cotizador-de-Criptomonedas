/* Imports */
import {
  mostrarAlerta,
  mostrarCotizacionHTML,
  mostrarSpinner,
  selectCriptomonedas,
} from './UI.js';
import { objBusqueda } from './app.js';
const CANTIDAD_DE_MONEDAS = 20;

/* Consulta de las ☝️ monedas con mayor market cup */
export async function consultarCriptomonedas() {
  const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${CANTIDAD_DE_MONEDAS}&tsym=USD`;
  try {
    const respuesta = await fetch(URL);
    const result = await respuesta.json();
    const criptomonedas = await obtenerCriptomonedas(result.Data);
    selectCriptomonedas(criptomonedas);
  } catch (error) {
    console.log(error);
    mostrarAlerta('Ocurrió un error: ' + error.message);
  }
}

/* Nueva consulta con los datos introducidos en los selects */
export async function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;
  const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

  try {
    const respuesta = await fetch(URL);
    const cotizacion = await respuesta.json();
    mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
  } catch (error) {
    console.log(error);
    mostrarAlerta('Ocurrió un error: ' + error.message);
  }
}

/* Crea un Promise */
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });
