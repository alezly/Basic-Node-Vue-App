// Se encargar de consultar servicios y retornar los datos a la API
const UserService = require('../services/user_services');
const service = new UserService();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const create = async ( req, res ) => {
    try { 
        const body = req.body;
        const salt = await bcrypt.genSalt(10);
        body.password  = await bcrypt.hash(body.password, salt);
        const response = await service.create(body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getByEmail = async ( req, res ) => {
    try {
        const { email } = req.params;
        const response = await service.findOneByEmail(email);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success:  0, data: "Email and password are required" });
        }

        const user = await service.findOneByEmail(email);
        if (!user) {
            return res.json({ success:  0, data: "Invalid email" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ success:  0, data: "Invalid password" });
        }

        // Generar token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ success:  1, message: "Login successfully", token });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById,getByEmail,login, update, _delete
};
