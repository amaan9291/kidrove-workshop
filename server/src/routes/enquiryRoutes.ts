import { Router } from "express";
import { createEnquiry } from "../controllers/enquiryController.js";

const router = Router();

router.post("/enquiry", createEnquiry);

export default router;