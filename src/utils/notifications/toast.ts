"use client";

import { useToast } from "@/hooks/use-toast";

type ToastNotificationProps = {
  variant: string;
  title: string;
  description: string;
}

export function useToastNotification({variant, title, description}: ToastNotificationProps) {
  const { toast } = useToast();
  toast({
    variant: "destructive",
    title: "Destructive Toast",
    description: "This is a destructive toast.",
  });
}
