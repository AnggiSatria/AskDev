import { Inter } from "next/font/google";
import "./globals.css";
import app from "@/config/firebase";
import Providers from "@/lib/provider/Providers";
import NextUI from "@/lib/next-ui/NextUI";
import RQuery from "@/lib/react-query/RQuery";
import "@mantine/core/styles.css";
import MantineUI from "@/lib/mantine-provider/MantineUI";
import { ColorSchemeScript } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "AskDev",
//   description: "AskDev",
// };

export default function RootLayout({ children }) {
  return (
    <RQuery>
      <Providers>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>AskDev</title>

            <ColorSchemeScript />
          </head>
          <body className={inter.className}>
            <NextUI>
              <MantineUI>{children}</MantineUI>
            </NextUI>
          </body>
        </html>
      </Providers>
    </RQuery>
  );
}
