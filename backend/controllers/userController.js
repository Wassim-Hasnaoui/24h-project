const {User} = require ('../models');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'server error'})
    }
};

exports.getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(500).json({message: 'user not found'})
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({message : 'server error'})
    }
};

exports.createUser = async (req, res) => {
const {name, sur_name, birth_date, gender, birth_adresse, full_father_name, fathers_proffession, full_mother_name, mothers_proffession, civilian_affairs_agent} = req.body;
try {
    const newUser = new User ({
        name,
        sur_name,
        birth_date,
        gender,
        birth_adresse,
        full_father_name,
        fathers_proffession,
        full_mother_name,
        mothers_proffession,
        civilian_affairs_agent
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
}catch (error) {
    console.error(error);
    return res.status(500).json({message: 'server error'})
}
},


exports.updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, sur_name, birth_date, gender, birth_adresse, full_father_name, fathers_proffession, full_mother_name, mothers_proffession, civilian_affairs_agent} = req.body;
    
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            name,
            sur_name,
            birth_date,
            gender,
            birth_adresse,
            full_father_name,
            fathers_proffession,
            full_mother_name,
            mothers_proffession,
            civilian_affairs_agent
        }, {new: true});
        if(!userInfo){
            return res.status(500).json({message : 'user not found'})
        }
        userInfo = await userInfo.save();
    }catch (error) {
        console.error(error);
        res.status(500).json({message : 'server error'})
    }
};

exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedUser = await UserfindByIdAndDelete(id);
        
        if(!deletedUser) {
            return res.status(500).json({message: 'user not found'})
    }
    res.json({message: 'user deleted successfully'})
}catch (error) {
    console.error(error);
    res.status(500).json({message: 'server error'})
}
};