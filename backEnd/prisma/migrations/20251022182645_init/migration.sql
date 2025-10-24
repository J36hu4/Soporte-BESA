-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NULL,
    `imagen` VARCHAR(500) NULL,
    `correo` VARCHAR(35) NOT NULL,
    `contrasenna` VARCHAR(250) NOT NULL,
    `role` ENUM('USER', 'TEC', 'ADMIN') NOT NULL DEFAULT 'USER',
    `ultimaSesion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` BOOLEAN NOT NULL DEFAULT true,
    `idioma` ENUM('es', 'en') NOT NULL DEFAULT 'es',

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notificacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRemitente` INTEGER NULL,
    `idDestinatario` INTEGER NOT NULL,
    `tipo` ENUM('asignacion', 'cambio_estado', 'observacion', 'inicio_sesion', 'exito', 'error', 'advertencia', 'info', 'nuevo') NOT NULL,
    `leido` BOOLEAN NOT NULL DEFAULT false,
    `mensaje` VARCHAR(500) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tecnico` (
    `id` INTEGER NOT NULL,
    `disponible` BOOLEAN NOT NULL DEFAULT true,
    `motivoDisponible` ENUM('disponible', 'almuerzo', 'descanso', 'ausente') NOT NULL DEFAULT 'disponible',
    `fechaDisponible` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `carga` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Especialidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `descripcion` VARCHAR(200) NOT NULL,
    `tiempoMaximoRespuesta` DOUBLE NOT NULL,
    `tiempoMaximoSolucion` DOUBLE NOT NULL,
    `prioridad` ENUM('baja', 'media', 'alta') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etiqueta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idCategoria` INTEGER NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario` INTEGER NOT NULL,
    `idEtiqueta` INTEGER NOT NULL,
    `titulo` VARCHAR(40) NOT NULL,
    `descripcion` VARCHAR(500) NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaCierre` DATETIME(3) NULL,
    `slaRespusta` DATETIME(3) NULL,
    `slaSolucion` DATETIME(3) NULL,
    `estado` ENUM('pendiente', 'asignado', 'en_proceso', 'resuelto', 'cerrado') NOT NULL DEFAULT 'pendiente',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistorialTicket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTicket` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,
    `estadoAnterior` ENUM('pendiente', 'asignado', 'en_proceso', 'resuelto', 'cerrado') NOT NULL,
    `estadoNuevo` ENUM('pendiente', 'asignado', 'en_proceso', 'resuelto', 'cerrado') NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `observacion` VARCHAR(500) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket_Imagen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idHistorial` INTEGER NOT NULL,
    `imagen` LONGBLOB NULL,
    `url` VARCHAR(200) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Asignacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTicket` INTEGER NOT NULL,
    `idTecnico` INTEGER NOT NULL,
    `idRegla` INTEGER NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `puntajePrioridad` INTEGER NOT NULL,
    `motivo` VARCHAR(300) NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `metodo` ENUM('manual', 'automatico') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Valoracion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idTicket` INTEGER NOT NULL,
    `idUsuario` INTEGER NOT NULL,
    `puntaje` INTEGER NOT NULL,
    `comentario` VARCHAR(300) NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Regla_Autotriage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `idCategoria` INTEGER NOT NULL,
    `prioridad` INTEGER NOT NULL,
    `carga` INTEGER NOT NULL,
    `activa` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EspecialidadToTecnico` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EspecialidadToTecnico_AB_unique`(`A`, `B`),
    INDEX `_EspecialidadToTecnico_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EspecialidadToRegla_Autotriage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EspecialidadToRegla_Autotriage_AB_unique`(`A`, `B`),
    INDEX `_EspecialidadToRegla_Autotriage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoriaToEspecialidad` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CategoriaToEspecialidad_AB_unique`(`A`, `B`),
    INDEX `_CategoriaToEspecialidad_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EtiquetaToRegla_Autotriage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EtiquetaToRegla_Autotriage_AB_unique`(`A`, `B`),
    INDEX `_EtiquetaToRegla_Autotriage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Notificacion` ADD CONSTRAINT `Notificacion_idRemitente_fkey` FOREIGN KEY (`idRemitente`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notificacion` ADD CONSTRAINT `Notificacion_idDestinatario_fkey` FOREIGN KEY (`idDestinatario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tecnico` ADD CONSTRAINT `Tecnico_id_fkey` FOREIGN KEY (`id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etiqueta` ADD CONSTRAINT `Etiqueta_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_idEtiqueta_fkey` FOREIGN KEY (`idEtiqueta`) REFERENCES `Etiqueta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialTicket` ADD CONSTRAINT `HistorialTicket_idTicket_fkey` FOREIGN KEY (`idTicket`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialTicket` ADD CONSTRAINT `HistorialTicket_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket_Imagen` ADD CONSTRAINT `Ticket_Imagen_idHistorial_fkey` FOREIGN KEY (`idHistorial`) REFERENCES `HistorialTicket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asignacion` ADD CONSTRAINT `Asignacion_idTicket_fkey` FOREIGN KEY (`idTicket`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asignacion` ADD CONSTRAINT `Asignacion_idTecnico_fkey` FOREIGN KEY (`idTecnico`) REFERENCES `Tecnico`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asignacion` ADD CONSTRAINT `Asignacion_idRegla_fkey` FOREIGN KEY (`idRegla`) REFERENCES `Regla_Autotriage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Valoracion` ADD CONSTRAINT `Valoracion_idTicket_fkey` FOREIGN KEY (`idTicket`) REFERENCES `Ticket`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Valoracion` ADD CONSTRAINT `Valoracion_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Regla_Autotriage` ADD CONSTRAINT `Regla_Autotriage_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EspecialidadToTecnico` ADD CONSTRAINT `_EspecialidadToTecnico_A_fkey` FOREIGN KEY (`A`) REFERENCES `Especialidad`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EspecialidadToTecnico` ADD CONSTRAINT `_EspecialidadToTecnico_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tecnico`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EspecialidadToRegla_Autotriage` ADD CONSTRAINT `_EspecialidadToRegla_Autotriage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Especialidad`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EspecialidadToRegla_Autotriage` ADD CONSTRAINT `_EspecialidadToRegla_Autotriage_B_fkey` FOREIGN KEY (`B`) REFERENCES `Regla_Autotriage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToEspecialidad` ADD CONSTRAINT `_CategoriaToEspecialidad_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoriaToEspecialidad` ADD CONSTRAINT `_CategoriaToEspecialidad_B_fkey` FOREIGN KEY (`B`) REFERENCES `Especialidad`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EtiquetaToRegla_Autotriage` ADD CONSTRAINT `_EtiquetaToRegla_Autotriage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Etiqueta`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EtiquetaToRegla_Autotriage` ADD CONSTRAINT `_EtiquetaToRegla_Autotriage_B_fkey` FOREIGN KEY (`B`) REFERENCES `Regla_Autotriage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
