import BgGradient from "@/components/common/bg-gradient";
import { Button } from "@/components/ui/button";
 import { prisma } from "@/lib/prisma";
import Link from "next/link";

// export const dynamic = "force-dynamic" // disabling the caching feature -> dynamic route
// export const revalidate = 0; //
 
export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="relative w-full">
      <BgGradient />
      <h1 className="font-bold text-4xl text-black drop-shadow-md flex item-center justify-around">
          Welcome to Snippets !!
        </h1>

      {/* Main container with frosted glass effect, similar to SnippetDetailPage */}
      <div className="relative z-10 p-8 m-8 md:m-16 lg:m-20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-black border-opacity-20 text-white flex flex-col gap-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
       
        <div className="flex items-center justify-between border-b border-black border-opacity-30 pb-4">
          <h2 className="font-semibold text-2xl text-black">Your Snippets</h2>
          <Link href={"/snippet/new"}>
            <Button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out">New Snippet</Button>
          </Link>
        </div>
        
        <div className="flex flex-col gap-3"> {/* Container for snippets list */}
          {snippets.map((snippet) => (
            <div 
              key={snippet.id} 
              className="flex items-center justify-between bg-gray-900 bg-opacity-50 p-4 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-md transition-all duration-200 ease-in-out"
            >
              <h3 className="font-medium text-lg text-gray-100">{snippet.title}</h3>
              <Link href={`/snippet/${snippet.id}`}>
                {/* Changed variant to a gradient button for consistency */}
                <Button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 ease-in-out">View</Button>
              </Link>
            </div>
          ))}
          {snippets.length === 0 && (
            <p className="text-center text-gray-400 text-lg mt-4">No snippets found. Create one to get started!</p>
          )}
        </div>
      </div>
    </div> 
  );
}