let users = [];
export const getUsersList = (req, res) => {
    res.json(users);
};


export const getUserProfile = (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(400).json({ massage: 'User not found.' });
    }

    res.json(user);
};


export const updateUserProfile = (req, res) => {
    const userId = req.params.id;
    const { fName, lName, email, password } = req.body;


    let user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(400).json({ message: 'User not found.' });
    }

    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.password = password;

    res.json({ message: `User ${userId} updated.`, user });
};


export const deleteUser = (req, res) => {
    const userId = req.params.id;

    res.send(`User deleted ${userId}`);
};

