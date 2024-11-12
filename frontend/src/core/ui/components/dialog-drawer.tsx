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
}

export function DialogDrawer({
  trigger,
  title,
  description,
  children,
}: DialogDrawerProps) {
  const [open, setOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery('md');

  return isDesktop
    ? (
      <Dialog open={open} onOpenChange={setOpen}>
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
      <Drawer open={open} onOpenChange={setOpen}>
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