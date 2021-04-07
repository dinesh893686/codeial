import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSignInSchema = new Schema({
   email:
   {
      type:string,
      required:true,
      unique:true

   },
   password:
   {
    type:string,
    required:true,
//   unique:true
   },

   // { timestamps: true }

    timestamps: true

});


const SignIn = mongoose.model('SignIn', userSignInSchema);
module.exports= 'SignIn'