const User = require('../model/user');
const secret = require('../config/auth.json');
const jwt = require('jsonweb')
const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    await User.create({
        name: name,
        password: password,
        email: email
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        res.error();
        console.log(`Ops, deu erro: ${erro}`);
    })
}
const DeleteUser = async(req,res) =>{
    const id = req.params;
    await User.destroy({
        where:{
            id:id
        }
    })
} 
const PutUser = async(req,res) =>{
    const { name, password, email } = req.body;
    const id = req.params;
    const idtransform = parseInt(id);
    await User.update({
        name: name,
        password: password,
        email: email
    },{
        idtransform:idtransform
    }
    )
 }

const GetUser = async (req, res) => {
    const users = await User.findAll();
     return res.json(users)
}
const authenticateUser = async (req,res) =>{
    const {email, password} = req.body;
    try{
        const isUserAthenticated = await User.findOne({
            where:{
                email:email,
                password:password
            }
        })
        const token = jwt.sign({id:email}, secret.secret,{
            expiresIn:86400
        })
        return res.json({
            name:isUserAthenticated.name,
            email:isUserAthenticated.email,
            token:token
        })
    }catch(error){
        return res.json("Usuário não encontrado")
    }
}
module.exports = { createUser, GetUser, DeleteUser, PutUser, authenticateUser};