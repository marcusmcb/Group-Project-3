const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
     user: {
          type: Schema.Types.ObjectId,
          ref: 'users'
     },
     handle: {
          type: String,
          required: true,
          max: 40
     },
     company: {
          type: String,
     },
     website: {
          type: String,
     },
     location: {
          type: String,
     },
     profession: {
          type: String,
          required: true
     },
     skills: {
          type: [String],
     },
<<<<<<< HEAD
=======
     language: {
          type: String,
     },
>>>>>>> aa6f5a976b255b0f614c891c6f878fae6fed8528
     experience: [
          {
               title: {
                    type: String,
                    required: true
               },
               company: {
                    type: String,
                    required: true
               },
               location: {
                    type: String,
               },
               from: {
                    type: Date,
                    required: true
               },
               to: {
                    type: Date,
               },
               current: {
                    type: Boolean,
                    default: false
               },
               description: {
                    type: String,
               }
          }
     ],
          social: {
          youtube: {
               type: String,
          },
          twitter: {
               type: String,
          },
          facebook: {
               type: String,
          },
          linkedin: {
               type: String,
          },
          instagram: {
               type: String,
          },

     },
     date: {
          type: Date,
          default: Date.now,
     }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);