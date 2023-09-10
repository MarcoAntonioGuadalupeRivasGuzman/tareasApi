import { conexion } from "../database.js";

export const getTarea= async (req, res)=>{
    const id=req.params.id;
    const [result] = await conexion.query('select * from tarea where id=?',id);
    if(result.length===0){
        return res.status(404).json({message: "Tarea no encontrada"});
    }
    res.json(result[0]);
};

export const getTareas= async (req,res)=>{
    const [result] = await conexion.query('select * from tarea');
    res.json(result);
    res.send('creando tareas');
};

export const createTarea= async (req, res)=>{
    const {title, description}=req.body;
    const [result] = await conexion.query('insert into tarea(title,descripcion) values(?,?)',[
        title,description
    ]);
    console.log(result);
    res.json({
        id: result.insertId,
        title,
        description,
    });
};

export const updateTarea= async (req, res)=>{
    const id = req.params.id;
    const {title, description}=req.body;
    const [result] = await conexion.query('update tarea set title=?, descripcion=? where id=?', [title,description,id]);
    res.json(result);
};

export const deleteTarea= async (req, res)=>{
    const id=req.params.id;
    const [result] = await conexion.query('delete tarea where id=?', id);
    if(result.affectedRows===0){
        return res.status(404).json({message: "Tarea no encontrada"});
    }
    return res.sendStatus(204);
};