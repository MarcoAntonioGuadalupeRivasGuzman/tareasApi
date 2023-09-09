import { Router } from "express";
import { createTarea, deleteTarea, getTarea, getTareas, updateTarea } from "../controllers/tareasController.js";

export const tareasRoutes=Router();

tareasRoutes.get('/tareas', getTareas);

tareasRoutes.get('/tareas/:id', getTarea);

tareasRoutes.post('/tareas', createTarea);

tareasRoutes.put('/tareas/:id', updateTarea);

tareasRoutes.delete('/tareas/:id', deleteTarea);

