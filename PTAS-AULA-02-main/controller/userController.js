const User = require('../model/user');

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
    const idtransform = parseInt(id)
 await User.update{
   {
    name: name,
    password: password,
    email: email
   }
   {
    
   }
 }
}
const GetUser = async (req, res) => {
    const users = await User.findAll();
     return res.json(users)
}
module.exports = { createUser, GetUser, DeleteUser, PutUser };