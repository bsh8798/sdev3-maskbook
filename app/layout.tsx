import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from '@/lib/registry';
import SwrProvider from "./_providers/swr-providers";

export const metadata: Metadata = {
  title: "Maskbook",
  description: "Community for masked people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body cz-shortcut-listen="true">
          <StyledComponentsRegistry>
            <SwrProvider>
              {children}
            </SwrProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
  );
}