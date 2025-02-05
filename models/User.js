import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    links: [
      {
        type: Schema.Types.ObjectId,
        ref: "Link", // This referng  to a Link model schema
      },
    ], // Array to store the user's shortened links
  },
  { timestamps: true }
);

// This Create or use existing User model
const User = models.User || mongoose.model("User", userSchema);

export default User;
