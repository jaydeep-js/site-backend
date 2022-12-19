const mongoose = require('mongoose')
const { Schema } = mongoose

export const HomeSchema = new Schema(
    {
        title: [
            {
                year: Schema.Types.String,
                maintitle: Schema.Types.String,
                desc: Schema.Types.String,
                readmorelink: Schema.Types.String,
                discoverlink: Schema.Types.String,
            },
        ],
        functionality: [
            {
                image: Schema.Types.String,
                maintitle: Schema.Types.String,
                desc: Schema.Types.String,
                readmorelink: Schema.Types.String,
            },
        ],
        testimonials: [
            {
                icon: Schema.Types.String,
                name: Schema.Types.String,
                desc: Schema.Types.String,
                category: Schema.Types.String,
            },
        ],
    },
    { timestamps: true }
);

const Home = mongoose.model('Home', HomeSchema, 'home')
module.exports = {
    Home
}