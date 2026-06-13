import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Feedback Aggregator — Smarter Hiring Decisions",
  description: "Centralize feedback from multiple interview rounds and get AI-powered hiring recommendations. Built for HR managers and hiring teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1d7a5724-cbb6-4b4d-a341-86d7e2cf19e0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
