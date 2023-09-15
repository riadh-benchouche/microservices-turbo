import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.ts";

export const register = async (req: any, res: any) => {
    try {
        const {firstname, lastname, email, password, role} = req.body;

        if (!(firstname && lastname && email && password && role))
            throw new Error("Invalid arguments");

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({email});
        if (existingUser)
            throw new Error(`L'adresse email ${email} est déjà utilisée`);

        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            role,
        });

        const payload = {
            userId: user._id
        };

        const options = {
            expiresIn: "12h",
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY as string, options);

        await user.save();

        res.json({
            message: "Utilisateur créé avec succès",
            token: token,
        });
    } catch (error) {
        res.status(500).json({
            error: `Une erreur est survenue lors de la création de l'utilisateur : ${error}`,
        });
    }
};

export const login = async (req: any, res: any) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if (!user) {
            return res.status(401).json({message: "Identifiants invalides"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({message: "Identifiants invalides"});
        }

        const payload = {
            userId: user._id,
        };

        const options = {
            expiresIn: "12h",
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY as string, options);
        // return user without password and token
        res.json({
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role: user.role,
            },
            message: "Connexion réussie",
            token: token,
        });
    } catch (error) {
        res.status(500).json({
            error: `Une erreur est survenue lors de la connexion : ${error}`,
        });
    }
};

export const logout = async (req: any, res: any) => {
    // Logique de déconnexion de l'utilisateur
};
