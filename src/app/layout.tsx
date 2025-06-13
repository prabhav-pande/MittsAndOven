'use client'
import "./globals.css";
import '@mantine/core/styles.css';
import { HeaderSimple } from "./components/Header";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <HeaderSimple>
          </HeaderSimple>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
