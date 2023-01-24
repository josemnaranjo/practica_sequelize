const {User} =require('../models');

module.exports.findAll = async (req,res)=> {
    try{
        const users = await User.findAll()
        res.json(users)
    }catch(err){
        console.log(err)
    }
};

module.exports.createNew = async (req,res) => {
    try{
        const newUser = await User.create({
            firstName: "Sproncho",
            age:30
        });
        res.json(newUser)
    }catch(err){
        console.log(err)
    }
};


module.exports.deleteUser = async (req,res) => {
    try{
        await User.destroy({ where:{ id:4 } });
        res.json({message:"exito"})
    }catch(err){
        console.log(err)
    }
}