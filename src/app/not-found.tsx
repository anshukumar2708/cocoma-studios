import CustomLink from "@/components/ui/CustomLink";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-md flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
                <p className="text-gray-400 mb-6">
                    The page you are looking for does not exist or has been moved.
                </p>
                <CustomLink
                    href="/"
                    title="Back to home"
                    className="btn-primary"
                />
            </div>
        </main>
    );
}