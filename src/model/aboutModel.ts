const mongoose = require('mongoose')
const { Schema } = mongoose

export const AboutSchema = new Schema(
    {
        aboutpage: [
            {
                title: Schema.Types.String,
                image1: Schema.Types.String,
                image2: Schema.Types.String,
                desc: Schema.Types.String,
                readmorelink: Schema.Types.String,
                worklist: Schema.Types.Array,
                contactlink: Schema.Types.String,
            },
        ],
        achievement: [
            {
                title: Schema.Types.String,
                icon: Schema.Types.String,
                number: Schema.Types.String,
            },
        ],
        workplace: [
            {
                name: Schema.Types.String,
                desc: Schema.Types.String,
                image: {
                    type: String,
                    required: true
                },
                // image:
                // {
                //     data: Buffer,
                //     contentType: String
                // },
                // image: Schema.Types.String,
                readmorelink: Schema.Types.String,
                contactuslink: Schema.Types.String,
                bestworkplace: Schema.Types.Boolean,
            },
        ],
        
    },
    { timestamps: true }
);

const About = mongoose.model('About', AboutSchema, 'about')
module.exports = {
    About
}