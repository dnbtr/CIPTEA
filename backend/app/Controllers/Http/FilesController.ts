// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// tenho que checar se os helpers estão instalados
/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers');

export default class FilesController {
async show({ params, response }) {
  return response.download(Helpers.tmpPath(`uploads/${params.file}`));
}
