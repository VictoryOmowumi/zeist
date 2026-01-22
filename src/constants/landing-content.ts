import { 
    Lock, Zap, Layers, Code, Terminal, 
    Workflow, GitBranch, Cloud, Users, 
    Clock, FileText, Folder, Database, Globe 
  } from "lucide-react"



  export const SECTION_LABELS = [
    // id, number, mainText, subText
    { id: "runtime-features", number: "01", mainText: "Quick Explainer", subText: "Key Value Props" },
    { id: "agentic-workloads", number: "02", mainText: "Use Cases", subText: "" },
    { id: "platform-features", number: "03", mainText: "Platform Features", subText: "" },
  ]
  
  // SECTION 1: RUNTIME FEATURES
  export const RUNTIME_FEATURES = [
    {
      title: "Secure Execution",
      description: "Isolated environments for untrusted agent-generated code.",
      icon: Lock,
    },
    {
      title: "Sub-200ms Startup",
      description: "Low latency agents require fast provisioned runtimes.",
      icon: Zap,
    },
    {
      title: "Persistent Sandboxes",
      description: "Sessions last as long as your workflows.",
      icon: Layers,
    },
  ]
  
  // SECTION 2: AGENTIC WORKLOADS
  export const AGENTIC_WORKLOADS = [
    { title: "LLM Code Execution", icon: Terminal },
    { title: "Data Processing & Pipelines", icon: Workflow },
    { title: "CI/CD & Build Systems", icon: GitBranch },
    { title: "Cloud IDEs & Playgrounds", icon: Cloud },
    { title: "Multi-Tenant Execution", icon: Users },
    { title: "Background Agent Tasks", icon: Layers },
  ]
  
  // SECTION 3: PLATFORM FEATURES
  export const PLATFORM_FEATURES = [
    { title: "Persistent Sessions (24h+)", icon: Clock },
    { title: "Streaming STDOUT / STDERR", icon: FileText },
    { title: "File System Isolation", icon: Folder },
    { title: "Ephemeral or Persistent Storage", icon: Database },
    { title: "Networking Controls", icon: Layers }, // Using Layers as placeholder for # icon
    { title: "Preview URLs", icon: Globe },
  ]