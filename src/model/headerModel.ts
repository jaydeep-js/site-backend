const mongoose = require('mongoose')
const { Schema } = mongoose

const HeaderSchema = new Schema(
    {
        location: Schema.Types.String,
        email: Schema.Types.String,
        time: Schema.Types.String,
        socialicon: [
            {
                icon: Schema.Types.String,
                iconlink: Schema.Types.String,
            },
        ],
        logo: Schema.Types.String,
        menubar: [
            {
                menuname: Schema.Types.String,
                menulink: Schema.Types.String,
            },
        ],
        contact: Schema.Types.Number,
        inquiryemail: Schema.Types.String,
    },
    { timestamps: true }
);

export const Header = mongoose.model('Header', HeaderSchema,'header')