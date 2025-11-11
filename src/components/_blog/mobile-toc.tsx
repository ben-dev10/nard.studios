"use client";

import React from "react";
import { List } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  // DrawerFooter
} from "@/components/ui/drawer";
import { TableOfContents } from "@/components/_blog/table-of-contents";
// import { PromoContent } from "@/components/_blog/promo-content";

export function MobileTableOfContents() {
  return (
    <Drawer>
      <DrawerTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 fixed right-6 bottom-6 z-50 rounded-full p-3 shadow-lg transition-colors lg:hidden">
        <List size={20} />
      </DrawerTrigger>

      <DrawerContent className="lg:hidden">
        <DrawerHeader>
          <h3 className="font-semibold">Table of Contents</h3>
        </DrawerHeader>

        <DrawerBody>
          <TableOfContents />
        </DrawerBody>

        {/* <DrawerFooter>
          <PromoContent variant="mobile" />
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
