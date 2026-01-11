import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-brand-cream text-brand-black selection:bg-brand-blue selection:text-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-24 overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </div>
    );
}
