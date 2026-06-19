import type { Request, Response } from "express";
import { z } from "zod";
import Enquiry from "../models/Enquiry.js";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s]+$/, "Phone number contains invalid characters"),
});

export const createEnquiry = async (req: Request, res: Response) => {
  try {
    const validationResult = enquirySchema.safeParse(req.body);

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]?.message;

      return res.status(400).json({
        success: false,
        message: firstError || "Invalid form data",
      });
    }

    const { name, email, phone } = validationResult.data;

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      workshopTitle: "AI & Robotics Summer Workshop",
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully.",
      data: {
        id: enquiry._id,
        name: enquiry.name,
        email: enquiry.email,
        phone: enquiry.phone,
        workshopTitle: enquiry.workshopTitle,
      },
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};