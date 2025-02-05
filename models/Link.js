import mongoose, { Schema, models } from "mongoose";

const linkSchema = new Schema(
  {
    originalUrl: {
      type: String,
      required: true, // The original, long URL
    },
    shortenedUrl: {
      type: String,
      required: true, // The shortened URL
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Referencing to the User model (to associate this link with a user)
      required: true,
    },
  },
  { timestamps: true } //timestamps for createdAt (Date of creation)
);

// Creating or use existing Link model
const Link = models.Link || mongoose.model("Link", linkSchema);

export default Link;
