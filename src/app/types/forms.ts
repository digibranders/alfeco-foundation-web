export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  area: string;
  interests: string[];
  availability: string;
  message: string;
}

export interface PartnershipFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  partnershipType: string;
  message: string;
  file: FileAttachment | null;
}

export interface FileAttachment {
  name: string;
  content: string;
}

export interface DonationFormData {
  fullName: string;
  email: string;
  phone: string;
  amount: number;
  customAmount: string;
  taxNumber: string;
  message: string;
}

export interface ApiResponse {
  success?: boolean;
  error?: string;
  redirectUrl?: string;
}
