import { v4 as uuidv4 } from 'uuid';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d).{6,}$/;
export const registerUser = (req, res) => {

        const { fName, lName, email, password} = req.body;

        if (!fName || !lName || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }


        if (!emailRegex.test(email)) {
            return res.status(400).json( {massage: 'invalid email format'} );
        }

        if (!passwordRegex.text(password)) {
            return res.status(400).json({massage: 'invalid password format'});
        }
        const userExists = user.find(user => user.email === email);
        if (userExists) {
            return res.status(400).json({massage: 'User already exists'});
        }
        const newUser = { id: uuidv4(), fName, lName, email, password };
        users.push(newUser);
        res.status(200).json({ massage: 'user registered successfully', user: newUser});
};

export const loginUser = (req, res) => {
    const { email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ massage: 'invalid email or password' });
    }

    res.status(200).json({ massage: 'Login successfully', user })
};