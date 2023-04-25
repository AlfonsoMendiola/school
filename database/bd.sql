CREATE TABLE usuarios(
    id int auto_increment,
    nombre varchar(255),
    apellidos varchar(255),
    usuario varchar(255),
    pass varchar(255),
    archivo varchar(255),
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    PRIMARY KEY (id)
);