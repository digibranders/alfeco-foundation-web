import { z } from 'zod';

const emailSchema = z.string().email('Invalid email address').max(254);
const phoneSchema = z.string().min(7, 'Phone number too short').max(20, 'Phone number too long');

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(200),
  email: emailSchema,
  message: z.string().min(1, 'Message is required').max(5000),
});

export const VolunteerSchema = z.object({
  fullName: z.string().min(1, 'Full name is required').max(200),
  email: emailSchema,
  phone: phoneSchema,
  area: z.string().min(1, 'Area is required'),
  interests: z.union([z.array(z.string()), z.string()]).optional(),
  availability: z.string().min(1, 'Availability is required'),
  message: z.string().max(5000).optional().default(''),
});

const FileSchema = z.object({
  name: z.string().min(1),
  content: z.string().min(1),
});

export const PartnershipSchema = z.object({
  companyName: z.string().min(1, 'Company name is required').max(300),
  contactPerson: z.string().min(1, 'Contact person is required').max(200),
  email: emailSchema,
  phone: phoneSchema,
  industry: z.string().min(1, 'Industry is required'),
  partnershipType: z.string().min(1, 'Partnership type is required'),
  message: z.string().max(5000).optional().default(''),
  file: FileSchema.optional(),
});

export type ContactFormInput = z.infer<typeof ContactSchema>;
export type VolunteerFormInput = z.infer<typeof VolunteerSchema>;
export type PartnershipFormInput = z.infer<typeof PartnershipSchema>;
