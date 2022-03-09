// importamos la base
import db from "../database/db.js"

import { DataTypes, Sequelize } from "sequelize"

const BlogModel = db.define("clientes",{
    /* id_Cliente: {type: DataTypes.INTEGER}, */
    Apellido:{type: DataTypes.STRING},
    Nombre: {type: DataTypes.STRING},
    Direccion: {type: DataTypes.STRING},
    //createdAt: {type: DataTypes.DATE }

    
},{timestamps: false})
export default BlogModel