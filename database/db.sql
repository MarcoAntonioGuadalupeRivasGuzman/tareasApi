create table tarea(
    id int primary key auto_increment,
    title varchar(50),
    descripcion varchar(250),
    done bool DEFAULT 0,
    createAt timestamp DEFAULT CURRENT_TIMESTAMP
);