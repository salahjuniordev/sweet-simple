import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { exportLeadsCsv } from "@/lib/leads.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/_admin/admin/analytics" as any)({
  component: AdminAnalytics,
});

const COLORS = ["#c5ff33", "#000000", "#666666", "#999999", "#cccccc"];

function AdminAnalytics() {
  const { data: leads, isLoading } = useQuery({
    queryKey: ["admin-leads-analytics"],
    queryFn: async () => {
      const { data, error } = await supabase.from("lead_submissions").select("*");
      if (error) throw error;
      return data;
    },
  });

  const handleExport = async () => {
    try {
      const { csv } = await exportLeadsCsv();
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute("download", `leads-export-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("Leads exported to CSV");
    } catch (error) {
      toast.error("Failed to export leads");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-brand" />
      </div>
    );
  }

  // Process data for charts
  const serviceData = leads?.reduce((acc: any[], lead) => {
    const existing = acc.find(i => i.name === lead.service_slug);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: lead.service_slug, value: 1 });
    }
    return acc;
  }, []) || [];

  const tierData = leads?.reduce((acc: any[], lead) => {
    const existing = acc.find(i => i.name === lead.tier);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: lead.tier, value: 1 });
    }
    return acc;
  }, []) || [];

  const sourceData = leads?.reduce((acc: any[], lead) => {
    const source = (lead as any).source || 'direct';
    const existing = acc.find(i => i.name === source);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: source, value: 1 });
    }
    return acc;
  }, []) || [];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Lead Analytics</h1>
          <p className="text-muted-foreground mt-2">Visualize your studio's performance and inquiries.</p>
        </div>
        <Button onClick={handleExport} className="bg-brand text-brand-foreground font-bold">
          <Download className="mr-2 h-4 w-4" /> Export CSV
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider">Leads by Service</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={serviceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" hide />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="value" fill="#c5ff33" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider">Leads by Tier</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tierData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {tierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase tracking-wider">Leads by Source</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <RechartsTooltip />
                <Bar dataKey="value" fill="#000000" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
