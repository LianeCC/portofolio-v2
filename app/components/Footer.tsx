"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Code } from "./MoreAboutMe";


export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("lianecoupatdev@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <footer id="contact" className="py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-4">Contact</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 mx-auto">
          <button
            onClick={handleCopy}
            className="flex bg-black text-white px-4 py-2 rounded-md hover:bg-primary/80 transition flex items-center gap-2"
          >
            {copied ? "Copié dans le presse-papier !" : "lianecoupatdev@gmail.com"}
            <Mail size={24} className={copied ? "text-accent" : "text-white"} />
          </button>
          <a
            href="/cvcoupat/cv-coupat-dev.pdf"
            download
            className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-primary/80 transition"
          >
            Téléchargez mon CV
          </a>
        </div>
        

        <div>
          <p className="text-xl font-semibold mb-4 text-center">ou envoyez moi un mail</p>
          <form
            action="https://formspree.io/f/xyzkwbdb"
            method="POST"
            className="max-w-lg mx-auto space-y-4 bg-black p-6 rounded-lg"
          >
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </Label>
              <Input type="email" name="email" id="email" className="bg-[#cee1e1] mt-1 block w-full transition-all duration-300 focus:bg-white" />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </Label>
              <Textarea name="message" id="message" rows={4} className="bg-[#cee1e1] mt-1 block w-full transition-all duration-300 focus:bg-white" />
            </div>
            <div className="text-center">
              <Button type="submit" className="bg-primary/50 text-white px-4 py-2 rounded-md hover:bg-primary/80 transition">
                Envoyez
              </Button>
            </div>
          </form>
        </div>
        <div className="pt-10 text-center">
          <p>Ce site ne collecte aucune donnée. Vous pouvez trouver le code source sur <Link href="https://github.com/LianeCC/portfoliodev"><Code className="text-primary">GitHub</Code></Link>. Merci de votre visite, passez une bonne journée ! 👋</p>
          <br/>
          <p>Développé avec <span className="line-through">amour</span> Next, hébergé sur Vercel.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
