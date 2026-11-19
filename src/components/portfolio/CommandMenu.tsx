import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Code2,
  Copy,
  Cpu,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Terminal,
  User,
} from "lucide-react";
import { toast } from "sonner";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

const RESUME_DOC_ID = "1RhSYB45D3RgmFeJVRMZBaYDlWBBFcpGaaOl-Bm1wpPw";
const RESUME_VIEW_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/preview`;
const RESUME_PDF_URL = `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`;

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    const onCustomOpen = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-menu", onCustomOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-menu", onCustomOpen);
    };
  }, []);

  const navigateTo = (hash: string) => {
    setOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView();
    } else {
      window.location.hash = hash;
    }
  };

  const copyEmail = async () => {
    setOpen(false);
    try {
      await navigator.clipboard.writeText("phurba1404@gmail.com");
      toast.success("Copied phurba1404@gmail.com to clipboard");
    } catch {
      window.location.href = "mailto:phurba1404@gmail.com";
    }
  };

  const openExternal = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Command Menu</DialogTitle>
      <DialogDescription className="sr-only">
        Navigate sections, copy contact details, or inspect open-source systems.
      </DialogDescription>
      <CommandInput
        placeholder="Jump to section, copy email, or inspect systems..."
        className="font-mono text-xs"
      />
      <CommandList className="max-h-[360px]">
        <CommandEmpty className="font-mono text-xs text-muted-foreground py-8">
          No matching command or section found.
        </CommandEmpty>

        <CommandGroup heading="Field guide / Contents">
          <CommandItem onSelect={() => navigateTo("#top")} className="gap-3 cursor-pointer">
            <span>Cover — Systems in practice</span>
            <CommandShortcut className="font-mono">/ 00</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("#about")} className="gap-3 cursor-pointer">
            <User className="w-4 h-4 text-primary" />
            <span>About & Impact Telemetry</span>
            <CommandShortcut className="font-mono">/ 01</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("#systems")} className="gap-3 cursor-pointer">
            <Cpu className="w-4 h-4 text-primary" />
            <span>Selected Systems & Open Source</span>
            <CommandShortcut className="font-mono">/ 02</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("#work")} className="gap-3 cursor-pointer">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>Experience & Track Record</span>
            <CommandShortcut className="font-mono">/ 03</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("#skills")} className="gap-3 cursor-pointer">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Toolkit & Stack</span>
            <CommandShortcut className="font-mono">/ 04</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("#certifications")} className="gap-3 cursor-pointer">
            <Award className="w-4 h-4 text-primary" />
            <span>Certifications & Education</span>
            <CommandShortcut className="font-mono">/ 05</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("#contact")} className="gap-3 cursor-pointer">
            <Mail className="w-4 h-4 text-primary" />
            <span>Contact & Direct Channels</span>
            <CommandShortcut className="font-mono">/ 06</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Direct Actions & Artifacts">
          <CommandItem onSelect={copyEmail} className="gap-3 cursor-pointer">
            <Copy className="w-4 h-4 text-primary" />
            <span>Copy Email (phurba1404@gmail.com)</span>
            <CommandShortcut className="font-mono">COPY</CommandShortcut>
          </CommandItem>
          <CommandItem
            onSelect={() => openExternal("https://github.com/Phurba-Sherpa/ollama-pr-review-gh-action")}
            className="gap-3 cursor-pointer"
          >
            <Code2 className="w-4 h-4 text-primary" />
            <span>OSS: ollama-pr-review-gh-action</span>
            <CommandShortcut className="font-mono">GITHUB ↗</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => openExternal(RESUME_VIEW_URL)} className="gap-3 cursor-pointer">
            <FileText className="w-4 h-4 text-primary" />
            <span>Preview Full Resume</span>
            <CommandShortcut className="font-mono">DOCS ↗</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => openExternal(RESUME_PDF_URL)} className="gap-3 cursor-pointer">
            <Download className="w-4 h-4 text-primary" />
            <span>Download Resume (PDF)</span>
            <CommandShortcut className="font-mono">PDF ↓</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Profiles">
          <CommandItem
            onSelect={() => openExternal("https://github.com/phurba-sherpa")}
            className="gap-3 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>GitHub — @phurba-sherpa</span>
            <ArrowUpRight className="ml-auto w-3.5 h-3.5 text-muted-foreground" />
          </CommandItem>
          <CommandItem
            onSelect={() => openExternal("https://linkedin.com/in/phurbas")}
            className="gap-3 cursor-pointer"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn — @phurbas</span>
            <ArrowUpRight className="ml-auto w-3.5 h-3.5 text-muted-foreground" />
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
