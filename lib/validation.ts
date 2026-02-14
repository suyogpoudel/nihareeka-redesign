import z from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

const commonFields = {
  name: z.string().min(2, "Name must be at least 2 characters long"),
  dob: z.date().nullable(),
  fatherName: z
    .string()
    .min(2, "Father's name must be at least 2 characters long"),
  motherName: z
    .string()
    .min(2, "Mother's name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  address: z.string().min(5, "Address must be at least 5 characters long"),
  entranceMarks: z.string().min(0, "Marks must be a positive number"),
  entranceRoll: z.string().min(1, "Entrance roll number is required"),
};

// Schema for MBS students
const mbsSchema = z.object({
  faculty: z.literal("MBS"),
  collegeName: z.string().min(2, "College name is required for MBS students"),
  schoolName: z.string().optional(),
  ...commonFields,
});

// Schema for other programs
const otherSchema = z.object({
  faculty: z.enum(["B.Sc. CSIT", "BCA", "BIM", "BHM", "BBS"]),
  schoolName: z.string().min(2, "School name is required for non-MBS students"),
  collegeName: z.string().optional(),
  ...commonFields,
});

// Discriminated union
export const RegisterFormSchema = z.discriminatedUnion("faculty", [
  mbsSchema,
  otherSchema,
]);

export type RegisterFormData = z.infer<typeof RegisterFormSchema>;
