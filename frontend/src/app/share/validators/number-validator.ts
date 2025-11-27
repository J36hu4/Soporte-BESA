import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function numberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (value === null || value === undefined || value === '') {
        return null; // no validar si está vacío, deja que "required" lo maneje
    }

    // Convertir a string para revisar caracteres
    const strValue = String(value);

    // Si contiene e, E, + o -
    if (/[eE+\-]/.test(strValue)) {
        return { invalidNumber: true };
    }

    // Si no es un número válido
    if (isNaN(Number(value))) {
        return { invalidNumber: true };
    }

    // Si es menor o igual a 0 (ejemplo de tu regla)
    if (Number(value) <= 0) {
        return { numberValidator: true };
    }

    return null;
}

export function numberValidatorManual(num: number): boolean {
    const value = num;

    const strValue = String(value);

    // Si contiene e, E, + o -
    if (/[eE+\-]/.test(strValue)) {
        return true;
    }

    // Si no es un número válido
    if (isNaN(Number(value))) {
        return true;
    }

    return false;
}