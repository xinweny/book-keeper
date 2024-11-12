import { useState } from 'react';

import { useMediaQuery } from '@/core/ui/hooks/use-media-query';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface DialogDrawerProps {
  trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

export function DialogDrawer({
  trigger,
  title,
  description,
  children,
  open,
  onOpenChange,
}: DialogDrawerProps) {
  const isDesktop = useMediaQuery('md');

  return isDesktop
    ? (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
    : (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild>
          {trigger}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>{title}</DrawerTitle>
            {description && (<DrawerDescription>
              {description}
            </DrawerDescription>)}
          </DrawerHeader>
          <div className="p-4">
            {children}
          </div>
        </DrawerContent>
      </Drawer>
    );
}