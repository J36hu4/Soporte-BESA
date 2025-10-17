
export function newFecha(ldias: number, lhoras: number, lminutos: number, mdias: number, mhoras: number, mminutos: number) {
    const fecha = new Date();

    // Restar 2 días
    fecha.setDate(fecha.getDate() - ldias);
    fecha.setHours(fecha.getHours() - lhoras);
    fecha.setMinutes(fecha.getMinutes() - lminutos);

    fecha.setDate(fecha.getDate() + mdias);
    fecha.setHours(fecha.getHours() + mhoras);
    fecha.setMinutes(fecha.getMinutes() + mminutos);

    return fecha
}

