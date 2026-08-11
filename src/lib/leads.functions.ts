import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data) => 
    z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
      service_slug: z.string(),
      tier: z.string(),
      source: z.string().optional(),
    }).parse(data)
  )
  .handler(async ({ data }) => {
    // In a real app, you'd use a mailer like Resend/SendGrid here
    console.log("New Lead Submission Notification:", data);
    console.log("Team: A new lead for", data.service_slug, "has been submitted by", data.name);
    console.log("User: Auto-reply sent to", data.email);
    
    // We'll simulate the "email sent" by returning success
    return { success: true };
  });

export const exportLeadsCsv = createServerFn({ method: "POST" })
  .handler(async () => {
    // In a real implementation, this would query the database and generate CSV
    const csv = "Date,Name,Email,Service,Tier,Status\n2026-08-11,John Doe,john@example.com,web-development,Premium,new";
    return { csv };
  });
