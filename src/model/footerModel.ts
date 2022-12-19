const mongoose = require('mongoose')
const { Schema } = mongoose
export const FooterSchema = new mongoose.Schema(
    {
        logo: Schema.Types.String,
        address: Schema.Types.String,
        contact: Schema.Types.Number,
        inquiryemail: Schema.Types.String,
        aboutinformation: Schema.Types.String,
        customercare: [
            {
              pagename: Schema.Types.String,
              pagelink: Schema.Types.String,
            },
          ],
          navigate: [
            {
              name: Schema.Types.String,
              link: Schema.Types.String,
            },
          ],
        contactforestimate: Schema.Types.String,
        readmorelink: Schema.Types.String,
        copyrightby: Schema.Types.String,
    },
    { timestamps: true }
);
const Footer = mongoose.model('Footer', FooterSchema,'footer')
module.exports = {
    Footer
}