import Post from "../models/Posts";

export const getPosts = async (req: any, res: any) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la récupération des articles : ${error}`});
    }
}

export const getPost = async (req: any, res: any) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la récupération de l'article : ${error}`});
    }
}

export const createPost = async (req: any, res: any) => {
    try {
        const post = new Post({
            title: req.body.title,
            body: req.body.body,
            cover: req.body.cover,
        });
        await post.save();
        res.json({message: "Article créé avec succès"});
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la création de l'article : ${error}`});
    }
}

export const updatePost = async (req: any, res: any) => {
    try {
        const post: any = await Post.findById(req.params.id);
        post.title = req.body.title;
        post.body = req.body.body;
        post.cover = req.body.cover;
        await post.save();
        res.json({message: "Article modifié avec succès"});
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la modification de l'article : ${error}`});
    }
}

export const deletePost = async (req: any, res: any) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({message: "Article supprimé avec succès"});
    } catch (error) {
        res.status(500).json({error: `Une erreur est survenue lors de la suppression de l'article : ${error}`});
    }
}
