import { PrismaClient } from "../generated/prisma";
import { categorias, etiquetas, autotriage } from "./seeds/categorias";
import { especialidades } from "./seeds/especialidades";
import { asignaciones, historialTickets, tickets, valoraciones } from "./seeds/tickets";
import { tecnicos, usuarios } from "./seeds/usuarios";

const prisma = new PrismaClient();
const main = async () => {
    try {
        await prisma.especialidad.createMany({ data: especialidades });
        await prisma.usuario.createMany({ data: usuarios });
        for (const tecnico of tecnicos) {
            await prisma.tecnico.create({ data: tecnico });
        }
        for (const categoria of categorias) {
            await prisma.categoria.create({ data: categoria });
        }
        await prisma.etiqueta.createMany({ data: etiquetas });
        for (const triage of autotriage) {
            await prisma.regla_Autotriage.create({ data: triage });
        }
        await prisma.ticket.createMany({ data: tickets });
        await prisma.asignacion.createMany({ data: asignaciones });
        await prisma.historialTicket.createMany({ data: historialTickets });
        await prisma.valoracion.createMany({ data: valoraciones });
        
    } catch (error) {
        console.error("Error al sembrar la base de datos:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
};
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
