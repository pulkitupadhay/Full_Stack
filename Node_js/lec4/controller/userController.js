const showAllUser=(req,res)=>{
    res.send("All users");
}

const createUser=(req,res)=>{
    res.send('hii');
}

const updateUser=(req,res)=>{
    res.send('user updated')
}

const deleteUser=(req,res)=>{
    res.send('user deleted')
}

module.exports={showAllUser, createUser, updateUser, deleteUser};