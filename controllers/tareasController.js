import { conexion } from "../database.js";

export const getTarea=(req, res)=>{
    res.send('creando tareas');
};

export const getTareas=(req,res)=>{
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

export const updateTarea=(req, res)=>{
    res.send('creando tareas');
};

export const deleteTarea=(req, res)=>{
    res.send('creando tareas');
};