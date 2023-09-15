import Projet from "../models/Project.ts";

export const getProjects = async (req: any, res: any) => {
    try {
        const projets = await Projet.find();
        res.json(projets);
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la récupération des projets : ${error}`});
    }
}

export const getProject = async (req: any, res: any) => {
    try {
        const projet = await Projet.findById(req.params.id);
        res.json(projet);
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la récupération de l'projet : ${error}`});
    }
}

export const createProject = async (req: any, res: any) => {
    try {
        const projet = new Projet({
            title: req.body.title,
            body: req.body.body,
            cover: req.body.cover,
        });
        await projet.save();
        res.json({message: "projet créé avec succès"});
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la création de l'proejet : ${error}`});
    }
}

export const updateProject = async (req: any, res: any) => {
    try {
        const projet: any = await Projet.findById(req.params.id);
        projet.title = req.body.title;
        projet.body = req.body.body;
        projet.cover = req.body.cover;
        await projet.save();
        res.json({message: "projet modifié avec succès"});
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la modification de l'projet : ${error}`});
    }
}

export const deleteProject = async (req: any, res: any) => {
    try {
        await Projet.findByIdAndDelete(req.params.id);
        res.json({message: "Projet supprimé avec succès"});
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la suppression de l'projet : ${error}`});
    }
}
