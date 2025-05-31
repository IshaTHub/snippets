"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import * as actions from "@/actions";
 
const CreateSnippetPage = () => {

  const [formStateData, xyz ] = useActionState(actions.createSnippet, {message:""});
    

  return (
   <div>
              
    <form action={xyz} className="relative z-10 p-8 m-8 md:m-16 lg:m-20 bg-violet-50 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-20 text-black flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-2xl">
      <h1 className="font-bold text-4xl text-black mb-4 drop-shadow-md">
        Create New Snippet
      </h1>
      <div>
        <Label htmlFor="title" className="text-lg font-semibold text-black-100 mb-2 block">Title</Label>
        <Input 
          type="text" 
          name="title" 
          id="title" 
          className="p-3 bg-gray-800 bg-opacity-50 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-black placeholder-gray-300 transition-all duration-200 w-full" 
          placeholder="Enter snippet title..." 
        />
      </div>
      <div>
        <Label htmlFor="code" className="text-lg font-semibold text-black-100 mb-2 block">Code</Label>
        <Textarea 
          name="code" 
          id="code" 
          className="p-3 bg-gray-800 bg-opacity-50 border border-purple-500 rounded-lg h-48 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-black font-mono placeholder-gray-300 transition-all duration-200 w-full" 
          placeholder="Paste your code here..." 
        />
      </div> 
       {formStateData.message && <div className="p-2 bg-red-300 border-2 border-red-600 mt-2">{formStateData.message}</div>} 
      <Button 
        type="submit" 
        className="my-4 px-8 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold shadow-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 ease-in-out self-end"
      >
        Create Snippet
      </Button>
    </form>
    </div>
  );
};

export default CreateSnippetPage;