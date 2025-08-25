// Importamos el hook useState de React para manejar estado
import { useState } from "react";

// Definimos un componente funcional llamado CounterApp que recibe props
export const CounterApp = ({value}) => {
    
    // useState hook: crea estado 'counter' con valor inicial de la prop 'value'
    // setCounter es la función para actualizar el estado
    const [counter, setCounter] = useState(value);
    
    // Función que incrementa el contador usando el patrón seguro de actualización
    // c => c+1: toma el valor actual y devuelve el nuevo valor
    const counterIncrement = () => setCounter(c => c+1);
    
    // Retorno del JSX que se renderizará
    return (
        <>
            {/* Muestra el valor actual del contador */}
            <h2>El valor del contador es {counter}</h2>
            
            {/* Botón que ejecuta counterIncrement al hacer click */}
            <button onClick={counterIncrement}>Incrementando Contador +1</button>
        </>
    );

};