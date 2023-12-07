import { FC } from "react";
import { Drawer as D } from "vaul";
import { Button } from "./ui/button";
import { Menu } from "./icons";
import { NavigationContent } from "./navigation-content";

export const Drawer: FC = () => {
  return (
    <D.Root shouldScaleBackground>
      <D.Trigger asChild>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu className="w-5 h-5" />
        </Button>
      </D.Trigger>
      <D.Portal>
        <D.Overlay className="fixed inset-0 bg-black/40" />
        <D.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-[60vh] flex-col rounded-t-lg bg-gray-100">
          <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-white p-4">
            <div className="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-neutral-300" />
            <NavigationContent />
          </div>
        </D.Content>
      </D.Portal>
    </D.Root>
  );
};
