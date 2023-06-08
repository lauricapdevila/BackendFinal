import { Cabecera } from "../models/models.js";

export const getCabecera = async(req,res) =>{
    const Cabeceras = await Cabecera.findAll()
    res.json(Cabeceras)
}

export const postCabecera = async(req,res) =>{
    const {idcliente,estado, total,fechainicio,horainicio,fechafin,horafin} = req.body
    const Cabeceras = await Cabecera.create({idcliente,estado, total,fechainicio,horainicio,fechafin,horafin})
    res.json(Cabeceras)
}

//PUT Cabecera
export const putCabecera = async(req,res) =>{
    const {idcliente,estado, total,fechainicio,horainicio,fechafin,horafin} = req.body
    const {idmesa} = req.params
    const Cabeceras = await Cabecera.update({idcliente,estado, total,fechainicio,horainicio,fechafin,horafin}, {where: {idmesa}})
    res.json(Cabeceras)
}


export const deleteCabecera = async(req,res) =>{
    const {idmesa} = req.params
    const Cabeceras = await Cabecera.destroy({where: {idmesa}})
    res.json(Cabeceras)
}
