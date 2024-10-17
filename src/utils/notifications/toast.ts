"use client";

import { useToast } from "@/hooks/use-toast";

type ToastNotificationProps = {
  variant?: "destructive" | undefined;
  title: string;
  description: string;
};

export function useToastNotification({
  variant,
  title,
  description,
}: ToastNotificationProps) {
  const { toast } = useToast();
  toast({
    variant,
    title,
    description,
  });
}
