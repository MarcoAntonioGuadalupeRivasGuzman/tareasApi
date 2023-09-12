import { conexion } from "../database.js";

export const getTarea= async (req, res)=>{
    const id=req.params.id;
    try{
    const [result] = await conexion.query('select * from tarea where id=?',id);
    if(result.length===0){
        return res.status(404).json({message: "Tarea no encontrada"});
    }
    res.json(result[0]);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};

export const getTareas= async (req,res)=>{
    try{
    const [result] = await conexion.query('select * from tarea');
    res.json(result);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};

export const createTarea= async (req, res)=>{
    const {title, description}=req.body;
    try{
    const [result] = await conexion.query('insert into tarea(title,descripcion) values(?,?)',[
        title,description
    ]);
    console.log(result);
    res.json({
        id: result.insertId,
        title,
        description,
    });
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

export const updateTarea= async (req, res)=>{
    const id = req.params.id;
    const {title, description}=req.body;
    try{
    const [result] = await conexion.query('update tarea set title=?, descripcion=? where id=?', [title,description,id]);
    res.json(result);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

export const deleteTarea= async (req, res)=>{
    const id=req.params.id;
    const [result] = await conexion.query('delete tarea where id=?', id);
    if(result.affectedRows===0){
        return res.status(404).json({message: "Tarea no encontrada"});
    }
    return res.sendStatus(204);
};