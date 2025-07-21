import "./globals.css";
import { Poppins } from "next/font/google";

const globalNextFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    title: "Forge - Build your future computer",
    description: "Forge is a platform for building and customizing your future computer with ease.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${globalNextFont.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
