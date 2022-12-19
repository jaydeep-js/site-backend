const mongoose = require('mongoose')
const { Schema } = mongoose

const ContactSchema = new Schema(
    {
        title: Schema.Types.String,
        subtitle: Schema.Types.String,
        address:Schema.Types.String,
        lat:Schema.Types.Number,
        lng:Schema.Types.Number,
        infotitle:Schema.Types.String,
        desc:Schema.Types.String,
        Info: [
            {
                Infotype: Schema.Types.String,
                name: Schema.Types.String,
                Infoclassname: Schema.Types.String
            },
        ],
        ContactInfo: [
            {
                title: Schema.Types.String,
                text: Schema.Types.String,
                icon: Schema.Types.String,
                link: Schema.Types.String
            },
        ],
        // ContactForm: [
        //     {
        //         name: Schema.Types.String,
        //         type: Schema.Types.String,
        //         classname: Schema.Types.String
        //     },
        // ],
    },
    { timestamps: true }
);

export const Contact = mongoose.model('Contact', ContactSchema,'contact')