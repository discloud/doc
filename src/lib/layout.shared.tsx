import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { i18n } from './i18n';
import { MdSpaceDashboard } from 'react-icons/md';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(_lang: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      enabled: true,
      title: (
        <>
          <Image
            src="/discloud.png"
            alt="discloud logo"
            width={24}
            height={24}
          />
          Discloud Docs
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        type: "button",
        text: <span className="
          flex items-center gap-2 py-1 px-2 rounded-md
          bg-fd-foreground text-fd-background
          hover:animate-pulse
        ">
          <MdSpaceDashboard className="inline"/>
          Dashboard
        </span>,
        url: "https://discloud.com/dashboard"
      }
    ],
    
  };
}
