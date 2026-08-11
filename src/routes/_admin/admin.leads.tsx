import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Clock, Trash2, Mail } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_admin/admin/leads")({
  component: AdminLeads,
});

function AdminLeads() {
  const { data: leads, refetch } = useQuery({
    queryKey: ["admin-leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lead_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("lead_submissions")
      .update({ status })
      .eq("id", id);
    
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Status updated to ${status}`);
      refetch();
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const { error } = await supabase.from("lead_submissions").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Lead deleted");
      refetch();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black tracking-tight">Leads & Inquiries</h1>
        <p className="text-muted-foreground mt-1">Manage incoming requests from service pages.</p>
      </div>

      <div className="rounded-xl border border-border bg-background overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Service / Tier</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads?.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                  {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : 'N/A'}
                </TableCell>
                <TableCell>
                  <div className="font-bold">{lead.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Mail className="h-3 w-3" /> {lead.email}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm font-semibold">{lead.service_slug}</div>
                  <div className="text-xs px-2 py-0.5 rounded-full bg-secondary inline-block">
                    {lead.tier}
                  </div>
                </TableCell>
                <TableCell className="max-w-[300px]">
                  <p className="text-xs text-muted-foreground line-clamp-2">{lead.message}</p>
                </TableCell>
                <TableCell>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                    lead.status === 'new' ? 'bg-blue-500/10 text-blue-500' :
                    lead.status === 'contacted' ? 'bg-orange-500/10 text-orange-500' :
                    'bg-green-500/10 text-green-500'
                  }`}>
                    {lead.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    {lead.status === 'new' && (
                      <Button variant="ghost" size="icon" onClick={() => updateStatus(lead.id, 'contacted')}>
                        <Clock className="h-4 w-4" />
                      </Button>
                    )}
                    {lead.status !== 'completed' && (
                      <Button variant="ghost" size="icon" className="text-green-500" onClick={() => updateStatus(lead.id, 'completed')}>
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteLead(lead.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {leads?.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                  No inquiries yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
