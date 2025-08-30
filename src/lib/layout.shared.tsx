import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { i18n } from './i18n';

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
    links: [],
  };
}
