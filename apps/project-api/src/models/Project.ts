import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    });

const Project = mongoose.model("Project", postSchema);

export default Project;
