import { Link } from "@heroui/link";
import { Head } from "@inertiajs/react";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head title="Welcome" />
            <Navbar />
            <main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
                {children}
            </main>
            <footer className="flex items-center justify-center w-full py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://www.heroui.com/?utm_source=laravel-template"
                    title="HeroUI Homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">Darknash</p>
                </Link>
            </footer>
        </div>
    );
}
