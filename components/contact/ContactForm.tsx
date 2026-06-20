"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

// --- SCHEMAS ---

const contactSchema = z.object({
  name: z.string().min(2, "Le nom complet est requis"),
  email: z.string().email("Adresse e-mail invalide"),
  reason: z.string().min(1, "Veuillez sélectionner un motif de contact"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactData = z.infer<typeof contactSchema>;

// --- MAIN COMPONENT ---

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
          className: "bg-green-50 border-green-200 text-green-800",
        });
        reset();
      } else throw new Error();
    } catch {
      toast({
        title: "Erreur d'envoi",
        description: "Veuillez réessayer ultérieurement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-text">Nom complet *</label>
          <Input placeholder="Votre nom" {...register("name")} className={errors.name ? "border-red-500" : ""} />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-text">Adresse email *</label>
          <Input type="email" placeholder="vous@exemple.com" {...register("email")} className={errors.email ? "border-red-500" : ""} />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-text">Téléphone (Optionnel)</label>
          <Input type="tel" placeholder="+228 XX XX XX XX" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-text">Motif du contact *</label>
          <Select onValueChange={(value) => setValue("reason", value)}>
            <SelectTrigger className={errors.reason ? "border-red-500" : ""}>
              <SelectValue placeholder="Sélectionnez un motif..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Demande de renseignement">Demande de renseignement</SelectItem>
              <SelectItem value="Adhésion à l'APOSP">Adhésion à l'APOSP</SelectItem>
              <SelectItem value="Proposition de partenariat">Proposition de partenariat</SelectItem>
              <SelectItem value="Autre demande">Autre demande</SelectItem>
            </SelectContent>
          </Select>
          {errors.reason && <p className="text-red-500 text-xs">{errors.reason.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-text">Message *</label>
        <Textarea placeholder="Rédigez votre message ici..." rows={6} {...register("message")} className={errors.message ? "border-red-500" : ""} />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent-dark text-surface font-semibold py-6 rounded-xl">
        {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Envoi en cours...</> : "Envoyer le message"}
      </Button>
    </form>
  );
}
