import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validador personalizado que asegura que el valor de un control de formulario
 * tiene al menos un número mínimo de palabras.
 *
 * @param minWords El número mínimo de palabras requeridas.
 * @returns Una función validadora (ValidatorFn) que devuelve
 * un objeto de error '{ 'minWords': { requiredWords: minWords, actualWords: count } }'
 * si el valor es inválido, o 'null' si es válido.
 */
export function numberValidator(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        // Si el valor es nulo, indefinido o no es una cadena, se considera válido aquí.
        // La validación 'Validators.required' debería manejar si el campo es obligatorio.
        if (value === null || value === undefined) {
            return null;
        }

        // Si el conteo de palabras es menor al mínimo requerido, devuelve un objeto de error.
        if (value <= min) {
            return { 'numberValidator': { minNumber: min, actualNumber: value } };
        }

        // Si el valor es válido (cumple con el mínimo de palabras), devuelve null.
        return null;
    };
}