import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import type { EnquiryFormData } from "../types/enquiry";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s]+$/, "Phone number contains invalid characters"),
});

function RegistrationForm() {
  const [serverMessage, setServerMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setServerMessage("");
    setIsSuccess(false);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${apiUrl}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setIsSuccess(true);
      setServerMessage(result.message || "Enquiry submitted successfully.");
      reset();
    } catch (error) {
      setIsSuccess(false);

      if (error instanceof Error) {
        setServerMessage(error.message);
      } else {
        setServerMessage("Unable to submit enquiry. Please try again.");
      }
    }
  };

  return (
    <section
      id="register"
      className="bg-white px-4 py-20 sm:px-6 lg:px-12 2xl:px-20"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Register Now
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Reserve your child&apos;s spot
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Fill out the enquiry form and our team will contact you with the
            next steps for the AI & Robotics Summer Workshop.
          </p>

          <div className="mt-8 rounded-3xl bg-orange-50 p-6 ring-1 ring-orange-100">
            <h3 className="text-xl font-black text-slate-950">
              Workshop Summary
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Age Group: 8–14 Years</li>
              <li>Duration: 4 Weeks</li>
              <li>Mode: Online</li>
              <li>Fee: ₹2,999</li>
              <li>Start Date: 15 July 2026</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] bg-orange-50 p-4 shadow-xl ring-1 ring-orange-100 sm:p-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-bold text-slate-800"
              >
                Parent / Student Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter full name"
                {...register("name")}
                className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />

              {errors.name && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm font-bold text-slate-800"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                {...register("email")}
                className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />

              {errors.email && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="phone"
                className="text-sm font-bold text-slate-800"
              >
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                {...register("phone")}
                className="mt-2 w-full rounded-2xl border border-orange-100 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />

              {errors.phone && (
                <p className="mt-2 text-sm font-medium text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-base font-black text-white shadow-lg transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={18} />
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </button>

            {serverMessage && (
              <p
                className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold ${
                  isSuccess
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {serverMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;