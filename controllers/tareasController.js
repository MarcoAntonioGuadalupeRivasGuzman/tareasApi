import { conexion } from "../database.js";

export const getTarea= async (req, res)=>{
    const id=req.params.id;
    const [result] = await conexion.query('select * from tarea where title=?',id);
    res.json(result);
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

export const updateTarea=(req, res)=>{
    res.send('creando tareas');
};

export const deleteTarea=(req, res)=>{
    res.send('creando tareas');
};