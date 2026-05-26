"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helpers";
import { Wallet, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinancialSummary({ project }) {
  const totalVal = Number(project.total_amount) || 0;
  const paidVal = Number(project.paid_amount) || 0;
  const paidRatio = totalVal > 0 ? Math.round((paidVal / totalVal) * 100) : 0;

  return (
    <Card className="border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
      <CardHeader className="border-b border-border/40 pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Wallet className="size-4.5 text-primary" />
          <span>Financial Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-5 space-y-4">
        
        {/* Massive Bold Total */}
        <div className="text-center p-4 bg-muted/10 rounded-xl border border-border/40 space-y-1">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Total Contract Value</span>
          <div className="text-2xl font-black text-primary font-heading leading-none">
            {formatCurrency(project.total_amount, project.currency)}
          </div>
        </div>

        {/* Paid vs Remaining breakdown */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 border border-border/40 rounded-xl bg-emerald-500/[0.02] space-y-1 text-center">
            <span className="block text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Paid Amount</span>
            <span className="block text-sm font-bold text-emerald-600 dark:text-emerald-400">
              {formatCurrency(project.paid_amount, project.currency)}
            </span>
          </div>
          
          <div className="p-3 border border-border/40 rounded-xl bg-amber-500/[0.02] space-y-1 text-center">
            <span className="block text-[9px] font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider">Remaining</span>
            <span className="block text-sm font-bold text-amber-600 dark:text-amber-500">
              {formatCurrency(project.remaining_amount, project.currency)}
            </span>
          </div>
        </div>

        {/* Payment Ratio Progress Bar */}
        <div className="space-y-1.5 pt-2 border-t border-border/30">
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground font-medium">Payment Ratio</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">{paidRatio}% Paid</span>
          </div>
          <Progress 
            value={paidRatio} 
            className="h-1.5 bg-muted/60" 
            indicatorClassName="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.25)]"
          />
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-border/30">
          <Button 
            variant="outline" 
            className="w-full gap-2 cursor-pointer text-xs" 
            asChild
          >
            <a href={`/invoice/${project.id}`} target="_blank" rel="noopener noreferrer">
              <Printer className="size-4" />
              <span>Print Invoice</span>
            </a>
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}