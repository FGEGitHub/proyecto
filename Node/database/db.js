define:{freezeTableName:true}
import { Sequelize } from "sequelize";

const db = new Sequelize('fideicomiso', 'root', 'root',{
    host:'localhost',
    dialect: 'mysql',
})

export default db
