import Page from "@/components/Page/Page";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <div className="min-h-screen flex flex-grow flex-col justify-center items-center">
                <Page />
            </div>

            <div className="mt-48 w-full">
                <Footer />
            </div>
        </div>
    );
}
