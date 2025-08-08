"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import {
  Menu,
  X,
  GraduationCap,
  Home,
  User,
  BadgeCheck,
  BookOpen,
  Code,
  Award,
  Briefcase,
  Mail,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Navigation items with icons
const navItems = [
  
  { label: "ABOUT", path: "/about", icon: User },
  { label: "SKILLS", path: "/skills", icon: BadgeCheck },
  { label: "EDUCATION", path: "/education", icon: BookOpen },
  { label: "PROJECTS", path: "/projects", icon: Code },
  { label: "CERTIFICATES", path: "/certificates", icon: Award },
  
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const isDashboardPage = pathname && pathname.includes("/dashboard");

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isDashboardPage ? (
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger />
              <main className="flex flex-col flex-1">
                <div className="ml-6 mt-4">
                  <ModeToggle />
                </div>
                <div className="flex-1 overflow-y-auto p-6">{children}</div>
              </main>
            </SidebarProvider>
          ) : (
            <main className="flex-1 flex flex-col h-screen overflow-hidden bg-white dark:bg-black">
              {/* Header */}
              <header className="flex justify-between items-center bg-white dark:bg-black p-4 md:p-6 shadow-lg relative border-b border-gray-200 dark:border-gray-700">
                {/* Mobile layout */}
                <div className="flex items-center md:hidden w-full">
                  {/* Left - Logo */}
                  <Link
                    href="/"
                    className="flex items-center justify-start space-x-2 text-xl font-bold text-gray-800 dark:text-white"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <span>HASIRU</span>
                  </Link>

                  {/* Right - Toggle + Menu */}
                  <div className="flex items-center space-x-4 ml-auto">
                    <ModeToggle />
                    <button
                      className="focus:outline-none"
                      onClick={toggleMobileMenu}
                    >
                      {isMobileMenuOpen ? (
                        <X className="h-6 w-6 text-gray-800 dark:text-white transition-all" />
                      ) : (
                        <Menu className="h-6 w-6 text-gray-800 dark:text-white transition-all" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex justify-between items-center w-full">
                  {/* Logo */}
                  <Link
                    href="/"
                    className="flex items-center space-x-3 text-2xl font-bold text-gray-800 dark:text-white"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 3,
                        ease: "easeInOut",
                      }}
                    >
                      <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <span>HASIRU</span>
                  </Link>

                  {/* Navigation */}
                  <nav className="flex space-x-8 text-lg text-gray-800 dark:text-gray-300 font-medium relative">
                    {navItems.map(({ label, path, icon: Icon }) => {
                      const isActive =
                        pathname === path ||
                        (label === "HOME" && pathname === "/");

                      return (
                        <Link
                          key={label}
                          href={path}
                          className={`relative group pb-1 ${
                            isActive
                              ? "text-blue-600 dark:text-blue-400 font-semibold"
                              : "hover:text-blue-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Icon className="h-5 w-5" />
                            <span>{label}</span>
                          </div>
                          <span
                            className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-500 transition-all duration-500 ease-in-out ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Theme toggle */}
                  <div className="ml-6">
                    <ModeToggle />
                  </div>
                </div>

                {/* Mobile dropdown menu */}
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50"
                    >
                      <div className="flex flex-col items-center space-y-4 py-6">
                        {navItems.map(({ label, path, icon: Icon }) => {
                          const isActive =
                            pathname === path ||
                            (label === "HOME" && pathname === "/");

                          return (
                            <motion.div
                              key={label}
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 }}
                              className="w-full text-center"
                            >
                              <Link
                                href={path}
                                onClick={closeMobileMenu}
                                className={`relative block text-lg font-semibold py-2 ${
                                  isActive
                                    ? "text-blue-600 dark:text-blue-400"
                                    : "text-gray-800 dark:text-gray-300 hover:text-blue-500"
                                }`}
                              >
                                <div className="flex items-center justify-center space-x-2">
                                  <Icon className="h-5 w-5" />
                                  <span>{label}</span>
                                </div>
                                <span
                                  className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 bg-blue-500 rounded transition-all duration-500 ease-in-out ${
                                    isActive
                                      ? "w-1/2"
                                      : "w-0 group-hover:w-1/2"
                                  }`}
                                ></span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </header>

              {/* Scrollable page content */}
              <div className="flex-1 overflow-y-auto p-6">{children}</div>
            </main>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
