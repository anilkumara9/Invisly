"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    // Function to handle scroll and update active section
    const handleScroll = () => {
      const sections = ["introduction", "getting-started", "exam-mode", "shortcuts", "features", "guidelines"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll once to set initial active section
    handleScroll();

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-20">
      <div className="container flex-1">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="hidden md:block md:w-64 lg:w-72 py-6 pr-6 border-r border-border/40">
            <nav className="space-y-1">
              <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Documentation</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="#introduction"
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${activeSection === "introduction"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("introduction");
                    }}
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href="#getting-started"
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${activeSection === "getting-started"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("getting-started");
                    }}
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="#exam-mode"
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${activeSection === "exam-mode"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("exam-mode");
                    }}
                  >
                    Exam Mode Usage
                  </Link>
                </li>
                <li>
                  <Link
                    href="#shortcuts"
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${activeSection === "shortcuts"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("shortcuts");
                    }}
                  >
                    Keyboard Shortcuts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${activeSection === "features"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("features");
                    }}
                  >
                    Key Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#guidelines"
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${activeSection === "guidelines"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("guidelines");
                    }}
                  >
                    Best Practices
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 py-6 md:py-8 lg:py-10 pb-16">
            <div className="max-w-4xl mx-auto px-4 md:px-0">
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-foreground">Home</Link>
                <span>/</span>
                <span className="text-foreground">Documentation</span>
              </div>

              <div className="space-y-20">
                {/* Introduction */}
                <section id="introduction" className="space-y-6">
                  <div className="text-center">
                    <h1 className="scroll-m-20 text-4xl md:text-5xl font-bold tracking-tight">
                      Invisily Platform Documentation
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                      Your invisible AI assistant for technical assessments and coding challenges.
                    </p>
                  </div>

                  <div className="mt-10 space-y-8">
                    <p className="text-lg leading-8 text-foreground">
                      Invisily is a cutting-edge AI assistant designed to provide discreet coding assistance during technical assessments while maintaining complete invisibility to proctoring systems. This documentation will guide you through setup, configuration, and best practices for using Invisily effectively.
                    </p>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-center">What Invisily Can Help You With</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start p-5 bg-card rounded-lg border border-border shadow-sm">
                          <div className="flex-shrink-0 mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">1</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-card-foreground">Debugging Complex Code</h4>
                            <p className="text-muted-foreground">
                              When you're stuck on a bug, Invisily can analyze your code and suggest solutions
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-card rounded-lg border border-border shadow-sm">
                          <div className="flex-shrink-0 mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">2</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-card-foreground">Algorithm Optimization</h4>
                            <p className="text-muted-foreground">
                              Get help improving the efficiency of your algorithms
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-card rounded-lg border border-border shadow-sm">
                          <div className="flex-shrink-0 mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">3</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-card-foreground">Syntax and Best Practices</h4>
                            <p className="text-muted-foreground">
                              Receive guidance on proper coding conventions and practices
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-card rounded-lg border border-border shadow-sm">
                          <div className="flex-shrink-0 mt-1 mr-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-lg">4</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2 text-card-foreground">Concept Explanation</h4>
                            <p className="text-muted-foreground">
                              Understand complex programming concepts through clear, step-by-step explanations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-4 text-center">How It Works in Practice</h3>
                      <p className="leading-8 text-foreground text-center max-w-3xl mx-auto">
                        During a technical assessment, you can quickly capture your coding environment with a simple keyboard shortcut. Invisily analyzes your code in real-time and provides relevant suggestions through a discreet overlay that only you can see. When you're done reviewing the assistance, you can instantly hide the interface with another keystroke, leaving no trace on your screen.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Getting Started */}
                <section id="getting-started" className="space-y-6">
                  <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight">
                    Getting Started
                  </h2>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-card-foreground">Download and Install</h3>
                        <p className="text-muted-foreground">
                          Download the latest version of Invisily from your dashboard and follow the installation instructions for your operating system.
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-card-foreground">Initial Setup</h3>
                        <p className="text-muted-foreground">
                          Launch Invisily and configure your preferences in the settings panel. Customize the overlay position, transparency, and activation methods.
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-card-foreground">Practice Mode</h3>
                        <p className="text-muted-foreground">
                          Before using Invisily during an actual exam, spend time in practice mode to familiarize yourself with the interface and features.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-2xl font-semibold mb-5 text-center">How Invisily Works</h3>

                    <div className="space-y-8">
                      <div className="p-5 bg-background rounded-lg border border-border">
                        <h4 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                          <span className="mr-3 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">1</span>
                          Intelligent Capture System
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Smart Screenshot Technology</strong>: When activated, Invisily captures high-fidelity screenshots of your coding environment using optimized system APIs that minimize resource consumption. This happens instantly and doesn't interrupt your workflow.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Selective Area Capture</strong>: Users can define specific regions of their screen to focus the analysis on relevant code areas. This ensures you're only getting help with the code that matters.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Multi-monitor Awareness</strong>: The system intelligently identifies and captures content from the active coding display. If you have multiple monitors, it focuses on the screen where you're actively working.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Format Optimization</strong>: Screenshots are processed and optimized for AI analysis while maintaining code readability. This ensures accurate analysis of your code.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-background rounded-lg border border-border">
                        <h4 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                          <span className="mr-3 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">2</span>
                          Advanced Analysis Engine
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Contextual Understanding</strong>: The AI analyzes not just individual code snippets but entire problem contexts, including error messages, instructions, and existing code structure. This means it understands what you're trying to accomplish, not just what's on the screen.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Multi-model Processing</strong>: Complex problems are processed through specialized AI models optimized for different types of coding challenges. Whether you're working on algorithms, data structures, or debugging, Invisily uses the right model for the job.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Pattern Recognition</strong>: The system identifies common coding patterns and anti-patterns to provide targeted suggestions. It can spot inefficient approaches and suggest better alternatives.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Language Agnostic Support</strong>: Capable of understanding and providing assistance for multiple programming languages including Python, Java, JavaScript, C++, and more.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-background rounded-lg border border-border">
                        <h4 className="text-xl font-semibold mb-4 flex items-center text-foreground">
                          <span className="mr-3 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">3</span>
                          Discreet Delivery Mechanism
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Overlay Interface</strong>: Solutions and suggestions appear in a minimal, non-intrusive overlay that can be instantly hidden. The overlay appears as a small window that doesn't cover your entire screen.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Customizable Presentation</strong>: Users can adjust the size, position, and transparency of the assistance overlay. Place it wherever is most convenient for your workflow.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Syntax-aware Formatting</strong>: Code suggestions are presented with proper syntax highlighting for easy comprehension. Variables, functions, and keywords are clearly differentiated.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mt-1 mr-3">✓</span>
                            <div className="text-foreground">
                              <strong>Progressive Disclosure</strong>: Complex solutions are broken down into digestible steps that can be revealed incrementally. This prevents information overload and helps you understand the solution process.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Exam Mode Usage */}
                <section id="exam-mode" className="space-y-6">
                  <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight">
                    Using Invisily During Exams
                  </h2>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                    <h3 className="font-semibold text-yellow-500 mb-3 text-xl">
                      Important Notice
                    </h3>
                    <p className="leading-7">
                      Always check your institution's academic integrity policy before using Invisily during any assessment. Unauthorized use of AI assistance during exams may violate academic policies.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Step-by-Step Workflow</h3>

                      <div className="space-y-6">
                        <div className="flex items-start p-5 bg-background rounded-lg border border-border">
                          <div className="flex-shrink-0 mt-1 mr-5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">1</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 text-foreground">Starting Invisily</h4>
                            <ul className="space-y-2 text-foreground">
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Launch the application before your exam begins</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>The application starts minimized and completely invisible until you need it</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>All your settings and preferences are securely stored on your local device</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>The interface appears only when needed and can be instantly hidden</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-background rounded-lg border border-border">
                          <div className="flex-shrink-0 mt-1 mr-5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">2</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 text-foreground">Capturing Your Code</h4>
                            <ul className="space-y-2 text-foreground">
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>When you need assistance, press <code className="font-mono font-bold">Ctrl/Cmd + H</code> to capture your screen</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>The system intelligently captures your coding environment</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Temporary files are securely managed and automatically cleaned up after analysis</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>This process happens quickly and doesn't interrupt your workflow</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-background rounded-lg border border-border">
                          <div className="flex-shrink-0 mt-1 mr-5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">3</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 text-foreground">Receiving Analysis</h4>
                            <ul className="space-y-2 text-foreground">
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Your code is analyzed by advanced AI models to understand the context</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Solutions are generated based on best practices and common patterns</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Complex problems are broken down into manageable, step-by-step instructions</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>The analysis typically takes just a few seconds</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-background rounded-lg border border-border">
                          <div className="flex-shrink-0 mt-1 mr-5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">4</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 text-foreground">Reviewing Assistance</h4>
                            <ul className="space-y-2 text-foreground">
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Solutions appear in a customizable overlay that doesn't interfere with your work</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Code snippets are presented with proper formatting and syntax highlighting</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>Detailed explanations help you understand the solution approach</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>You can navigate through multiple solution steps as needed</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start p-5 bg-background rounded-lg border border-border">
                          <div className="flex-shrink-0 mt-1 mr-5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">5</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold mb-3 text-foreground">Hiding the Interface</h4>
                            <ul className="space-y-2 text-foreground">
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>When you're finished reviewing, press <code className="font-mono font-bold">Ctrl/Cmd + B</code> to instantly hide the interface</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>The application returns to its invisible state</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-green-500 mt-1 mr-2">•</span>
                                <span>No trace of the assistance is visible on your screen</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/50 rounded-xl p-5 border border-border">
                        <h3 className="font-semibold mb-4 text-lg flex items-center">
                          <span className="mr-2 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">✓</span>
                          Recommended Settings for Exams
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-500 mt-1 mr-2 flex-shrink-0">✓</span>
                            <span>Use windowed mode instead of full-screen during exams</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mt-1 mr-2 flex-shrink-0">✓</span>
                            <span>Position Invisily as a small overlay in a corner of your screen</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mt-1 mr-2 flex-shrink-0">✓</span>
                            <span>Minimize movement and interactions during proctored sessions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mt-1 mr-2 flex-shrink-0">✓</span>
                            <span>Use keyboard shortcuts for all interactions</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-xl p-5 border border-border">
                        <h3 className="font-semibold mb-4 text-lg flex items-center">
                          <span className="mr-2 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">✓</span>
                          Activation Best Practices
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-blue-500 mt-1 mr-2 flex-shrink-0">•</span>
                            <span>Activate Invisily only when you need assistance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mt-1 mr-2 flex-shrink-0">•</span>
                            <span>Deactivate immediately after getting the information you need</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mt-1 mr-2 flex-shrink-0">•</span>
                            <span>Minimize mouse movements and prefer keyboard shortcuts</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Keyboard Shortcuts */}
                <section id="shortcuts" className="space-y-6">
                  <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight">
                    Keyboard Shortcuts
                  </h2>

                  <div className="space-y-8">
                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Essential Keyboard Shortcuts</h3>
                      <p className="text-muted-foreground mb-6 font-semibold text-white text-center">To use Invisily effectively, familiarize yourself with these important keyboard shortcuts:</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center p-5 bg-background rounded-lg border border-border text-center">
                          <code className="font-mono font-bold text-yellow-500 text-lg bg-muted px-3 py-2 rounded text-foreground">Ctrl + H</code>
                          <span className="block text-sm text-muted-foreground mt-2">macOS: Cmd + H</span>
                          <span className="mt-3 text-foreground">Capture your screen for analysis</span>
                        </div>
                        <div className="flex flex-col items-center p-5 bg-background rounded-lg border border-border text-center">
                          <code className="font-mono font-bold text-lg text-yellow-500 bg-muted px-3 py-2 rounded text-foreground">Ctrl + M</code>
                          <span className="block text-sm text-muted-foreground mt-2">macOS: Cmd + M</span>
                          <span className="mt-3 text-foreground">Activate click mode for interacting with the interface</span>
                        </div>
                        <div className="flex flex-col items-center p-5 bg-background rounded-lg border border-border text-center">
                          <code className="font-mono font-bold text-lg text-yellow-500 bg-muted px-3 py-2 rounded text-foreground">Ctrl + N</code>
                          <span className="block text-sm text-muted-foreground mt-2">macOS: Cmd + N</span>
                          <span className="mt-3 text-foreground">Deactivate and hide the interface</span>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                        <p className="text-sm text-foreground">
                          <strong>Practice Tip:</strong> Practice these shortcuts before your exam so they become second nature.
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Advanced Shortcuts</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center p-5 bg-background rounded-lg border border-border text-center">
                          <code className="font-mono font-bold text-lg text-yellow-500 bg-muted px-3 py-2 rounded text-foreground">Ctrl + Shift + H</code>
                          <span className="block text-sm text-muted-foreground mt-2">macOS: Cmd + Shift + H</span>
                          <span className="mt-3 text-foreground">Hide all overlays</span>
                        </div>
                        <div className="flex flex-col items-center p-5 bg-background rounded-lg border border-border text-center">
                          <code className="font-mono font-bold text-lg text-yellow-500 bg-muted px-3 py-2 rounded text-foreground">Ctrl + Shift + R</code>
                          <span className="block text-sm text-muted-foreground mt-2">macOS: Cmd + Shift + R</span>
                          <span className="mt-3 text-foreground">Reset position</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Discreet Operation Features</h3>

                      <div className="space-y-6">
                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Seamless Visibility Control</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Quick Toggle</strong>: Press <code className="font-mono font-bold">Ctrl/Cmd + B</code> to instantly show or hide the entire interface. This is especially useful when someone approaches your screen.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Complete Disappearance</strong>: When hidden, Invisily leaves no visual trace on your screen. The application continues running in the background.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Smooth Transitions</strong>: Interface appears and disappears with subtle animations to avoid drawing attention during screen sharing.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Customizable Interface</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Adjustable Transparency</strong>: Control how visible the interface is when active. Make it more transparent when you need to be extra cautious.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Positioning Flexibility</strong>: Move the interface to any location on your screen. Place it in a corner where it's less likely to be noticed.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Size Customization</strong>: Resize the interface to fit your workspace preferences. A smaller window is less conspicuous.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Minimal Design</strong>: Clean interface that doesn't distract from your primary work. No flashy graphics or unnecessary elements.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Key Features */}
                <section id="features" className="space-y-6">
                  <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight">
                    Key Features
                  </h2>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center text-center p-5 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-lg font-semibold mb-2">Zero Focus Stealing</div>
                        <p className="text-muted-foreground text-sm">
                          Invisily never steals focus from your exam application, ensuring you maintain control during assessments.
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-5 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-lg font-semibold mb-2">Invisible to Screenshare</div>
                        <p className="text-muted-foreground text-sm">
                          The overlay is completely invisible to proctoring software and screen recording systems.
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-5 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-lg font-semibold mb-2">Local Processing</div>
                        <p className="text-muted-foreground text-sm">
                          All processing happens locally on your machine with no data transmission during exams.
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-5 bg-green-500/10 rounded-lg border border-green-500/30">
                        <div className="text-lg font-semibold mb-2">Customizable Interface</div>
                        <p className="text-muted-foreground text-sm">
                          Adjust transparency, position, and size to fit your workflow and minimize detection risk.
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">User Experience Features</h3>

                      <div className="space-y-6">
                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Intuitive Interface Design</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Simple Activation</strong>: One-key activation (<code className="font-mono font-bold">Ctrl/Cmd + H</code>) for immediate assistance when you need it most. Intuitive controls that don't require technical knowledge or extensive training. Clear visual feedback when the system is active so you know it's working.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Adaptive Presentation</strong>: Solutions presented in an easy-to-read format with clear headings and organization. Code snippets with proper syntax highlighting that matches industry standards. Adjustable interface that can be resized and repositioned to fit your workspace.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Seamless Integration</strong>: Works with your existing development environment without requiring changes. No disruption to your normal workflow or coding habits. Compatible with all major code editors and IDEs including VS Code, IntelliJ, and Sublime Text.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Personalization Options</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Display Settings</strong>: Adjust the interface transparency to your preference. Make it more opaque when you need to see details clearly, or more transparent when discretion is paramount. Place the interface wherever it's most convenient for your screen setup. Move it to avoid overlapping with important exam content. Scale the interface to match your screen and vision needs. Perfect for high-resolution displays or users who need larger text.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Interaction Preferences</strong>: Customize key combinations for common actions to match your existing workflow. Change shortcuts if the defaults conflict with your editor. Choose how you prefer to trigger assistance. Stick with keyboard shortcuts or explore other options. Manage how you receive updates and alerts. Control what notifications appear and when.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Privacy and Security</h3>

                      <div className="space-y-6">
                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Your Data Protection</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Local Processing</strong>: All analysis happens on your device, ensuring your code never leaves your computer. No internet transmission of your code is required for basic functionality.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>No Data Storage</strong>: We don't store your code, solutions, or personal information on our servers. Everything you create remains on your local device.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Secure Communication</strong>: When external services are used (such as for advanced AI processing), all communication is encrypted using industry-standard protocols.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Automatic Cleanup</strong>: Temporary files are automatically removed after each session. No residual data is left behind that could compromise your privacy.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Privacy Features</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>No Tracking</strong>: Invisily doesn't track your usage or collect personal information. We don't know what you're working on or how you use the application.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Transparent Operation</strong>: You always know what data is being processed. The application only analyzes what you explicitly capture.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>User Control</strong>: You control when and how the system is activated. Nothing happens without your explicit action.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Ethical Use</strong>: Clear guidelines help ensure responsible usage. We provide guidance on appropriate use during academic assessments.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Best Practices */}
                <section id="guidelines" className="space-y-6">
                  <h2 className="scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight">
                    Best Practices
                  </h2>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-5 bg-red-500/10 border border-red-500/30 rounded-xl text-center">
                        <h3 className="font-semibold text-red-500 mb-3 text-lg">
                          Academic Integrity
                        </h3>
                        <p className="leading-6">
                          Always check your institution's academic integrity policy before using Invisily during any assessment. Unauthorized use of AI assistance during exams may violate academic policies and result in serious consequences.
                        </p>
                      </div>

                      <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-center">
                        <h3 className="font-semibold text-yellow-500 mb-3 text-lg">
                          Proctoring System Awareness
                        </h3>
                        <p className="leading-6">
                          Different proctoring systems have varying detection capabilities. Exercise caution and minimize interactions when proctoring is active. When in doubt, deactivate Invisily entirely.
                        </p>
                      </div>

                      <div className="p-5 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center">
                        <h3 className="font-semibold text-blue-500 mb-3 text-lg">
                          Practice First
                        </h3>
                        <p className="leading-6">
                          Familiarize yourself with Invisily's features and shortcuts in a practice environment before using it during an actual exam. This will help you use it more efficiently and reduce the chance of detection.
                        </p>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Performance and Reliability</h3>

                      <div className="space-y-6">
                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Efficient Operation</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Minimal Resource Usage</strong>: Runs smoothly even on older hardware. Typically uses less than 50MB of RAM during operation.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Battery Friendly</strong>: Optimized to preserve your device's battery life. Won't drain your laptop battery during long exam sessions.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Fast Response Times</strong>: Quick analysis and solution delivery. Most code analysis completes in under 10 seconds.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Reliable Performance</strong>: Consistent operation across different system configurations. Tested on a wide range of hardware setups.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Smooth User Experience</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Instant Activation</strong>: Quick response to user commands. The interface appears immediately when you need it.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Seamless Updates</strong>: Background updates don't interrupt your workflow. Updates are downloaded and installed automatically without requiring your attention.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Stable Operation</strong>: Robust error handling ensures consistent performance. If one analysis fails, the application continues to function normally.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Cross-Platform Consistency</strong>: Same reliable experience on Windows, macOS, and Linux. No platform-specific quirks or issues.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-xl p-6 border border-border">
                      <h3 className="text-2xl font-semibold mb-5 text-center">Getting Started with Invisily</h3>

                      <div className="space-y-6">
                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Key Benefits</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Discreet Operation</strong>: Appears and disappears at your command without drawing attention. Perfect for use during proctored exams.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Intelligent Assistance</strong>: Advanced AI provides relevant coding solutions and explanations tailored to your specific problem.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Cross-Platform Support</strong>: Works seamlessly on Windows, macOS, and Linux. Install it on any device you use for coding.
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="text-green-500 mt-1 mr-3">✓</span>
                              <div className="text-foreground">
                                <strong>Privacy Focused</strong>: Your code and data remain on your device. No cloud storage or external transmission of your work.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 bg-background rounded-lg border border-border">
                          <h4 className="text-xl font-semibold mb-4 text-foreground">Best Practices for Exam Use</h4>
                          <div className="space-y-3">
                            <div className="flex items-start">
                              <span className="font-bold mr-3 text-primary">1.</span>
                              <div className="text-foreground">
                                <strong>Practice First</strong>: Use Invisily during homework and practice problems to become familiar with its features
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="font-bold mr-3 text-primary">2.</span>
                              <div className="text-foreground">
                                <strong>Use Windowed Mode</strong>: During proctored exams, use windowed mode rather than full-screen to avoid detection
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="font-bold mr-3 text-primary">3.</span>
                              <div className="text-foreground">
                                <strong>Minimize Interactions</strong>: Activate Invisily only when needed and hide it immediately after reviewing assistance
                              </div>
                            </div>
                            <div className="flex items-start">
                              <span className="font-bold mr-3 text-primary">4.</span>
                              <div className="text-foreground">
                                <strong>Know the Shortcuts</strong>: Memorize the keyboard shortcuts for quick activation and hiding
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 text-center">
                        <p className="text-sm text-foreground">
                          With its user-friendly interface, efficient performance, and commitment to privacy, Invisily provides reliable coding assistance while respecting the integrity of academic assessments.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Quote Section */}
                <section className="py-16 bg-black overflow-hidden">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <blockquote className="text-4xl md:text-6xl font-bold text-center text-yellow-500 italic">
                      &ldquo;The world is changing, and technology is evolving rapidly. Don&rsquo;t get stuck in traditional education systems. Embrace platform like Invisily and don&rsquo;t feel shy to use Invisly, Interviewcoder, and other platforms. Be creative, innovative, and fearless in adopting new solutions.&rdquo;
                    </blockquote>
                  </div>
                </section>
              </div>

              {/* Navigation */}
              <div className="mt-20 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center px-5 py-3 text-base font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-5 py-3 text-base font-medium bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground rounded-lg transition-all shadow-lg"
                >
                  Go to Dashboard →
                </Link>
              </div>
            </div>
          </main>

          {/* Table of Contents */}
          <aside className="hidden lg:block lg:w-64 xl:w-72 py-6 pl-6 border-l border-border/40">
            <div className="sticky top-24">
              <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                On this page
              </h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link href="#introduction" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="#getting-started" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="#exam-mode" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Exam Mode Usage
                  </Link>
                </li>
                <li>
                  <Link href="#shortcuts" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Keyboard Shortcuts
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Key Features
                  </Link>
                </li>
                <li>
                  <Link href="#guidelines" className="block px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    Best Practices
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}