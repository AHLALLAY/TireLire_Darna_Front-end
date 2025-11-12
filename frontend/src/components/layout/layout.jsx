import Header from "../common/header.jsx";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-light">
            <header className="w-full bg-neutral-dark border-b border-neutral shadow-md sticky top-0 z-50">
                <Header role={1} />
            </header>

            <main className="flex-1 bg-neutral-light">
                <Outlet />
            </main>

            <footer className="w-full bg-neutral-dark border-t border-neutral py-6 px-6 mt-auto">
                <div className="container mx-auto text-center">
                    <p className="text-sm text-white" dir="ltr">
                        <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]">CoProp</span> &copy; 2025 - تيرلير، دارنا
                    </p>
                    <p className="text-xs mt-2 text-neutral-text" dir="rtl">
                        منصة الإعلانات العقارية والادخار الجماعي
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Layout;