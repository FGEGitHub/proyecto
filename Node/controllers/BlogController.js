//import { json } from "sequelize/types"; 
import BlogModel from "../models/BlogModel.js";


// metodos para el CURD

// mostrar todos los registros
export const  getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs)

    }catch(error) {
        res.json({message: error.message})
    }
}

// mostrar un registro 
export const  getBlog = async(req, res) => {
    try {
        const blogs = await BlogModel.findAll({
            where:{ id:req.params.id}
        })
        res.json(blogs[0])

    }catch(error) {
        res.json({message: error.message})
    }
}
// crear un registrto
export const createBlog = async (req, res) =>{
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error){
        res.json({message: error.message})
    }
}

//Actualizar un contacto 
export const updateBlog = async (req, res)=> {
try {
    await BlogModel.update(req.body, {
        where: { id: req.params.id}
    })
    res.json({"message": " Registro actualizado"})
    
} catch (error){
    res.json({message: error.message})
}

}


// Eliminar un registro
export const deleteBlog = async (req, res) => {
    try{
        BlogModel.destroy({
            where: {id: req.param.id}
        })
        res.json({message: 'registro borrado'})
        
           
        
    }catch (error) {
        res.json({message: error.message})
    }


}


