import Calculadora from "./utils/calculator.js";
import { loggear } from "./utils/messages.js";

const calc = new Calculadora();
const miSuma = calc.suma(2, 3);

loggear(`Mi suma es ${miSuma}`);
