import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const authMiddleware = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY as string);
            req.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).send("Token invalide");
        }
    } else {
        res.status(401).send("Authentification requise");
    }
};

export default authMiddleware;
