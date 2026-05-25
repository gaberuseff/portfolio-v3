export const MOCK_PROJECTS = [
  {
    id: "proj_1",
    title: "Clinix — Smart Clinic Management SaaS",
    description:
      "A comprehensive cloud-based system for managing medical appointments, organizing digital patient records, and generating financial analytics for clinics and hospitals.",
    progress: 65,
    milestoneLevel: 2,
    statusLabel: "In Active Development",
    startDate: "2026-04-01", // تاريخ بداية المشروع
    deadline: "2026-06-15", // الموعد النهائي المتوقع تسليمه فيه
    endDate: null, // لسه مخلصش فبياخد null
    liveUrl: "https://clinix-staging.vercel.app",
    figmaUrl: "https://figma.com/file/clinix-design-system",
    currentMilestone:
      "Integrating payment gateways & securing physician database access.",
    activeTicketsCount: 3,
    lastUpdated: "2 hours ago",
    total_amount: "5000",
    paid_amount: "2500",
    remaining_amount: "2500",
    currency: "EGP",
  },
  {
    id: "proj_2",
    title: "Chrono — Luxury Watches E-Commerce Platform",
    description:
      "A premium e-commerce mobile-responsive web app tailored for luxury watch trading. Features advanced inventory tracking, secure checkout flows, and shipment tracking.",
    progress: 90,
    milestoneLevel: 3,
    statusLabel: "Testing & QA Review",
    startDate: "2026-03-10",
    deadline: "2026-05-30",
    endDate: null, // في مرحلة التيست ولسه متسلمش نهائي
    liveUrl: "https://chrono-watch.gaberuseff.com",
    figmaUrl: null,
    currentMilestone:
      "Final user acceptance testing (UAT) and live payment sandbox simulations.",
    activeTicketsCount: 1,
    lastUpdated: "Yesterday",
    total_amount: "100",
    paid_amount: "100",
    remaining_amount: "0",
    currency: "EGP",
  },
  {
    id: "proj_3",
    title: "Professional Portfolio & Client Portal System",
    description:
      "Development of a highly optimized personal portfolio to showcase developer works, paired with an integrated custom CRM/Client Portal for live project tracking.",
    progress: 100,
    milestoneLevel: 5,
    statusLabel: "Completed & Deployed",
    startDate: "2026-01-15",
    deadline: "2026-03-01",
    endDate: "2026-02-28", // تم التسليم الفعلي (قبل الديدلاين بيوم!)
    liveUrl: "https://www.gaberuseff.com",
    figmaUrl: "https://figma.com/file/portfolio-v3",
    currentMilestone:
      "All milestones completed. System successfully launched live.",
    activeTicketsCount: 0,
    lastUpdated: "1 week ago",
    total_amount: "100",
    paid_amount: "100",
    remaining_amount: "0",
    currency: "USD",
  },
  {
    id: "proj_4",
    title: "Aura Perfumes — Dropshipping E-Store",
    description:
      "An automated e-commerce storefront integrated with third-party dropshipping APIs for real-time inventory sync, single-click order fulfillment, and automated tracking updates.",
    progress: 15,
    milestoneLevel: 1,
    statusLabel: "Planning & Requirements Gathering",
    startDate: "2026-05-20", // لسه بادئ من أيام
    deadline: "2026-07-01",
    endDate: null,
    liveUrl: null,
    figmaUrl: "https://figma.com/file/perfume-store-ux",
    currentMilestone:
      "Architecting Database Schema (Prisma models) and aligning on UI wireframes.",
    activeTicketsCount: 0,
    lastUpdated: "3 days ago",
    total_amount: "100",
    paid_amount: "100",
    remaining_amount: "0",
    currency: "USD",
  },
];
