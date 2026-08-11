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
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    
    // Fetch notification settings
    const { data: settings } = await (supabaseAdmin.from("notification_settings" as any) as any)
      .select("value")
      .eq("key", "lead_notifications")
      .single();

    const config = (settings?.value as any) || {
      team_emails: ["hello@mariostudio.com"],
      auto_reply_enabled: true,
      team_notification_enabled: true
    };

    if (config.team_notification_enabled) {
      console.log(`[Notification] Sending lead alert to team: ${config.team_emails.join(", ")}`);
      console.log(`Lead Details: ${JSON.stringify(data, null, 2)}`);
    }

    if (config.auto_reply_enabled) {
      console.log(`[Notification] Sending auto-reply to customer: ${data.email}`);
      console.log(`Subject: Thanks for reaching out to Mario Studio!`);
    }
    
    return { success: true };
  });

export const getNotificationSettings = createServerFn({ method: "GET" })
  .handler(async () => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data } = await supabaseAdmin
      .from("notification_settings")
      .select("*")
      .eq("key", "lead_notifications")
      .single();
    return data;
  });

export const updateNotificationSettings = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    team_emails: z.array(z.string().email()),
    auto_reply_enabled: z.boolean(),
    team_notification_enabled: z.boolean()
  }).parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("notification_settings")
      .upsert({ key: "lead_notifications", value: data });
    if (error) throw error;
    return { success: true };
  });

export const exportLeadsCsv = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({
    service: z.string().optional(),
    tier: z.string().optional(),
    source: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional()
  }).optional().parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let query = supabaseAdmin.from("lead_submissions").select("*").order("created_at", { ascending: false });

    if (data?.service) query = query.eq("service_slug", data.service);
    if (data?.tier) query = query.eq("tier", data.tier);
    if (data?.source) query = query.eq("source", data.source);
    if (data?.startDate) query = query.gte("created_at", data.startDate);
    if (data?.endDate) query = query.lte("created_at", data.endDate);

    const { data: leads } = await query;
    
    if (!leads || leads.length === 0) return { csv: "No data" };

    const headers = ["Date", "Name", "Email", "Service", "Tier", "Source", "Status"];
    const rows = leads.map(l => [
      l.created_at,
      l.name,
      l.email,
      l.service_slug,
      l.tier,
      (l as any).source || "direct",
      l.status
    ].join(","));

    return { csv: [headers.join(","), ...rows].join("\n") };
  });
