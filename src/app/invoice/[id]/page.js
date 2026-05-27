import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { formatCurrency, formatDate } from "@/lib/helpers";
import { getClientProject } from "@/services/apiProjects";
import { LuArrowLeft, LuGlobe, LuMail, LuShieldCheck } from "react-icons/lu";
import Link from "next/link";
import { redirect } from "next/navigation";
import PrintButton from "@/components/PrintButton";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) {
    return { title: "Invoice" };
  }
  const p = await getClientProject(id, session.user.id);

  if (!p) {
    return { title: "Invoice" };
  }
  return {
    title: `${p.title} - Invoice`,
  };
}

export default async function InvoicePage({ params }) {
  const { id } = await params;

  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const p = await getClientProject(id, session.user.id);
  
  if (!p) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
        <h3 className="text-lg font-bold">Invoice Not Found</h3>
        <p className="text-sm text-muted-foreground">The requested invoice could not be found.</p>
        <Button asChild>
          <Link href="/projects">Return to Projects</Link>
        </Button>
      </div>
    );
  }

  const total = p.totalAmount || 0;
  const invoiceNumber = `GU-INV-${new Date(p.startDate || p.createdAt || Date.now()).getFullYear()}-${String(p.id).substring(0, 4).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-[#09090b] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden print:bg-white print:p-0 print:min-h-0">
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          html, body {
            background-color: #ffffff !important;
            color: #09090b !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            size: portrait;
            margin: 2cm;
          }
          .print-clean-card {
            border: none !important;
            box-shadow: none !important;
            background-color: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}} />

      {/* 1. Header Toolbar - Hidden during printing */}
      <div className="max-w-2xl mx-auto mb-8 flex items-center justify-between print:hidden bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/50 rounded-2xl p-4 shadow-sm">
        <Button variant="ghost" size="sm" asChild className="gap-1.5 cursor-pointer text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-xl transition-all">
          <Link href={`/projects/${p.id}`}>
            <LuArrowLeft className="size-4" />
            <span className="font-semibold text-xs tracking-wide">Back to Dashboard</span>
          </Link>
        </Button>

        <PrintButton />
      </div>

      {/* 2. Main Minimal Invoice Sheet */}
      <div className="print-clean-card max-w-2xl mx-auto bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/60 rounded-3xl shadow-sm p-10 sm:p-12 relative text-zinc-800 dark:text-zinc-200">
        
        {/* Top Header: Contact Details & Branding */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-zinc-100 dark:border-zinc-800/60 pb-8">
          {/* Brand Info */}
          <div className="space-y-2.5">
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl font-black tracking-wide text-zinc-900 dark:text-white uppercase leading-none">
                  Gaber Usef
                </h1>
                <LuShieldCheck className="size-4 text-emerald-500 shrink-0" title="Verified Professional / مهندس معتمد" />
              </div>
              <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none mt-1.5 block">
                Creative Technologist & Engineer
              </span>
            </div>
            
            {/* Contact details */}
            <div className="space-y-1.5 text-xs text-zinc-400 font-medium pt-1">
              <div className="flex items-center gap-2">
                <LuMail className="size-3.5 text-zinc-400/80" />
                <span className="font-mono">gaber@gaberusef.dev</span>
              </div>
              <div className="flex items-center gap-2">
                <LuGlobe className="size-3.5 text-zinc-400/80" />
                <span className="font-mono">www.gaberusef.dev</span>
              </div>
            </div>
          </div>

          {/* Document Type & Metadata */}
          <div className="text-left sm:text-right space-y-1">
            <h2 className="text-xl font-black text-zinc-900 dark:text-white tracking-widest uppercase">INVOICE</h2>
            <div className="space-y-0.5 text-xs text-zinc-400 font-semibold font-mono">
              <div>No: <span className="text-zinc-900 dark:text-white">{invoiceNumber}</span></div>
              <div>Date: <span>{formatDate(p.startDate)}</span></div>
            </div>
          </div>
        </div>

        {/* Project details section */}
        <div className="py-8 space-y-6">
          {/* Project Name */}
          <div className="space-y-1.5">
            <span className="block text-[9px] font-black text-zinc-400 uppercase tracking-widest">Project Name / اسم المشروع</span>
            <h3 className="font-black text-zinc-900 dark:text-white text-lg leading-tight">
              {p.title}
            </h3>
          </div>

          {/* Project Description */}
          <div className="space-y-1.5">
            <span className="block text-[9px] font-black text-zinc-400 uppercase tracking-widest">Project Description / وصف المشروع</span>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
              {p.description || "Full software lifecycle development, interactive and modular user interface engineering, custom database integrations, and high-performance server launch solutions."}
            </p>
          </div>
        </div>

        {/* Simple Cost & Pricing block */}
        <div className="border-t border-zinc-100 dark:border-zinc-800/60 pt-6">
          <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-0.5">
              <span className="block text-sm font-extrabold text-zinc-900 dark:text-white">Total Payment</span>
            </div>
            <div className="text-2xl font-black text-primary font-mono leading-none">
              {formatCurrency(total, p.currency)}
            </div>
          </div>
        </div>

        {/* Organized Authenticity & Signature Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left: Subtle Professional Verification seal */}
          <div className="text-center sm:text-left space-y-1 font-mono text-[9px] text-zinc-400/80">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-[8px] font-sans font-black text-emerald-500 uppercase tracking-widest leading-none">
              <LuShieldCheck className="size-3.5" />
              <span>Officially Verified Document / وثيقة معتمدة</span>
            </div>
          </div>

          {/* Right: Signature */}
          <div className="flex flex-col items-center sm:items-end space-y-1 text-xs text-zinc-400 font-semibold">
            <span className="text-sm text-primary select-none opacity-80">Gaber Usef</span>
          </div>
        </div>

      </div>
    </div>
  );
}
