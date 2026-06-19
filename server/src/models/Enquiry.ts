import mongoose, { Schema } from "mongoose";

export interface IEnquiry {
  name: string;
  email: string;
  phone: string;
  workshopTitle: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [10, "Phone number must be at least 10 digits"],
      maxlength: [15, "Phone number is too long"],
    },
    workshopTitle: {
      type: String,
      required: true,
      default: "AI & Robotics Summer Workshop",
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model<IEnquiry>("Enquiry", enquirySchema);

export default Enquiry;