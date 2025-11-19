import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import uploadFile from "../middleware/ImageConfig";

const __basedir = path.resolve();
const baseUrl = "http://localhost:3000/";
const directoryPath = path.join(__basedir, "/assets/uploads/");
export class ImageController {
  upload = async (request: Request, response: Response, next: NextFunction) => {
    try {

      //Subir la imagen
      await uploadFile(request, response);
      if (!request.file) {
        response.status(400).send({ message: "¡Por favor sube un archivo!" });
        return;
      }

      


      response.status(200).send({
        message: "Archivo subido exitosamente",
        fileName: request.file.filename,
      });
    } catch (error: any) {
      next(error);
    }
  };

  delate = async (request: Request, response: Response, next: NextFunction) => {
    try {

      // Archivo anterior
      let previousFileName = request.body.previousImage;
      // Si existe un archivo anterior, eliminarlo
      console.log(previousFileName)
      if (previousFileName && previousFileName !== 'notImage.png') {
        const previousFilePath = path.join(directoryPath, previousFileName);
        if (fs.existsSync(previousFilePath)) {
          fs.unlinkSync(previousFilePath);
        }
      }
      response.status(200).send({
        message: "Archivo eliminado",
        fileName: previousFileName,
      });
    } catch (error: any) {
      next(error);
    }
  };

  getListFiles = (
    request: Request,
    response: Response,
    next: NextFunction
  ): void => {
    try {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          response.status(500).send({
            message: "¡No se pueden escanear los archivos!",
          });
          return;
        }
        const fileInfos = files.map((file) => ({
          name: file,
          url: baseUrl + file,
        }));
        response.status(200).send(fileInfos);
      });
    } catch (error: any) {
      next(error);
    }
  };

  download = (
    request: Request,
    response: Response,
    next: NextFunction
  ): void => {
    try {
      const fileName = request.params.name;
      const directoryPath = path.join(__basedir, "/assets/uploads//");
      response.download(path.join(directoryPath, fileName), fileName, (err) => {
        if (err) {
          response.status(500).send({
            message: "No se pudo descargar el archivo. " + err,
          });
        }
      });
    } catch (error: any) {
      next(error);
    }
  };
}
