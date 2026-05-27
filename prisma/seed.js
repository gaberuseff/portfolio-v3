require('dotenv').config();
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const worksData = [
  {
    id: 1,
    title: "Vista Valley - Reservation Platform",
    description: "A full-featured booking platform for Vista Valley resort. Guests can check real-time cabin availability, authenticate securely, and manage reservations from a custom client dashboard.",
    features: [
      "Interactive room availability calendar powered by React Day Picker",
      "Seamless and secure user authentication flow using NextAuth.js (v5)",
      "Real-time PostgreSQL database synchronization and media storage via Supabase",
      "Comprehensive guest dashboard showing active, past, and upcoming bookings",
      "Fully responsive and optimized layout deployed on Vercel with web analytics"
    ],
    image: "https://ulubznmnvepevknyjlee.supabase.co/storage/v1/object/public/works-images/720shots_so.webp",
    live_link: "https://vista-valley.vercel.app/",
    source_link: "https://github.com/gaberuseff/vistaValley",
    tech_stack: [
      "Next.js",
      "Tailwind CSS",
      "Auth.js",
      "React Day Picker",
      "Supabase",
      "Vercel"
    ],
    role: "Full-stack Developer",
  },
  {
    id: 2,
    title: "Vista Valley - Admin Dashboard",
    description: "An enterprise-grade admin portal for Vista Valley resort. Administrators can perform complete CRUD actions on cabins, manage user reservations, create admin credentials, and track metrics.",
    features: [
      "Advanced state management and optimistic UI updates via TanStack React Query",
      "Complete CRUD control panel for cabin management and reservation handling",
      "Dynamic data tables with server-side searching, sorting, and pagination",
      "Custom admin provisioning flows, statistical data charts, and dark mode theme",
      "Type-safe form verification built with React 19 and Styled Components"
    ],
    image: "https://ulubznmnvepevknyjlee.supabase.co/storage/v1/object/public/works-images/631shots_so.webp",
    live_link: "https://vista-valley-admin.vercel.app/dashboard",
    source_link: "https://github.com/gaberuseff/vistaValley-Admin",
    tech_stack: [
      "React 19",
      "TanStack React Query",
      "Styled Components",
      "React Hook Form",
      "Supabase",
      "Vercel"
    ],
    role: "Full-stack Developer",
  },
  {
    id: 3,
    title: "Gamr Full-Stack Admin Panel",
    description: "A secure e-commerce dashboard for a gaming store. Features include product catalog CRUD, active sales order tracking, and role-based access controls powered by Supabase and TanStack Query.",
    features: [
      "Complete catalog and order management dashboard with full CRUD capabilities",
      "High-speed server state fetching, caching, and background synchronizations",
      "Robust role-based access control (RBAC) with secure admin login states",
      "Impeccable dark mode configuration styled with Tailwind CSS and Hero UI",
      "Persistent cloud database storage and file management via Supabase APIs"
    ],
    image: "https://ulubznmnvepevknyjlee.supabase.co/storage/v1/object/public/works-images/923shots_so.webp",
    live_link: "https://gamr-admin.vercel.app/dashboard",
    source_link: "https://github.com/gaberuseff/Gamr-Admin",
    tech_stack: [
      "React 19",
      "TanStack React Query",
      "Tailwind CSS",
      "Hero UI",
      "Supabase",
      "Vercel"
    ],
    role: "Full-stack Developer",
  },
  {
    id: 4,
    title: "Full-Stack Clinic Operations Platform",
    description: "A modern healthcare operating platform designed to streamline medical clinic workflows. It manages patient visits, records, appointments, digital prescriptions, and serverless edge automation.",
    features: [
      "Intuitive active visit monitor and real-time medical appointment scheduler",
      "Secure digital prescription generator with automated discount algorithms",
      "Comprehensive patient record vault with granular audit trails and history logs",
      "Serverless execution tasks using Supabase Edge Functions for backend routines",
      "Fast, responsive layout utilizing TanStack React Query and Hero UI"
    ],
    image: "https://ulubznmnvepevknyjlee.supabase.co/storage/v1/object/public/works-images/607shots_so.webp",
    live_link: "https://clinicflow-admin.vercel.app/",
    source_link: "",
    tech_stack: [
      "React 19",
      "TanStack React Query",
      "Tailwind CSS",
      "Hero UI",
      "Supabase",
      "Supabase Edge Functions"
    ],
    role: "Full-stack Developer",
  }
];

async function main() {
  console.log("Starting seed process...");

  // Delete existing records in the Work table
  console.log("Deleting existing works in the database...");
  await prisma.work.deleteMany();

  // Create new records
  console.log("Seeding new works...");
  for (const work of worksData) {
    await prisma.work.create({
      data: work,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
