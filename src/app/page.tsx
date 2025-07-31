import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
            <p className="text-gray-600">Get started by editing src/app/page.tsx</p>
          </div>
        </div>
      </div>
    </main>
  );
}
