import React from 'react'
import { prisma } from "@/lib/prisma";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as actions from "@/actions";
import BgGradient from '@/components/common/bg-gradient';

type SnipppetDetailsProps = {
    params: Promise<{ id: string }>;
  };
  
  const SnippetDetailPage: React.FC<SnipppetDetailsProps> = async ({
    params,
  }) => {
    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: {
          id,
        },
      });  

      if (!snippet) notFound();

      const deleteSnippetActions = actions.deleteSnippet.bind(null, snippet.id);

      return (
        <div className="relative w-full">
              <BgGradient />
        <div className="relative z-10 p-8 m-8 md:m-16 lg:m-20 bg-violet-100 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-20 text-white flex flex-col gap-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <div className="flex items-center justify-between border-b border-black border-opacity-100 pb-4">
            <h1 className="font-bold text-4xl text-black drop-shadow-md">
              {snippet.title}
            </h1>
            <div className="flex items-center gap-3">
              <Link href={`/snippet/${snippet.id}/edit`}>
                <Button className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ease-in-out">
                  Edit
                </Button>
              </Link>
              <form action={deleteSnippetActions}>
                <Button variant={"destructive"} type="submit" className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold shadow-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 ease-in-out">
                  Delete
                </Button>
              </form>
            </div>
          </div>
          <pre className="p-6 bg-gray-900 bg-opacity-70 rounded-xl shadow-inner border border-gray-700 text-gray-200 overflow-auto max-h-[60vh] text-sm font-mono leading-relaxed">
            <code>{snippet.code}</code>
          </pre>
        </div>
        </div>
      );
    };
    
    export default SnippetDetailPage;
    
    
    export const generateStaticParams = async () => {
      const snippets = await prisma.snippet.findMany();
    
      return snippets.map((snippet)=> {
        return {id:snippet.id.toString()}
      })
    }