"use client";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";



const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  const changeEvenHandler = (value:string = "") => {
    setCode(value);
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    
    
    <div className="relative z-10 p-8 mt-0 mx-8 md:mx-16 lg:mx-20 bg-violet-100 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-30 text-white flex flex-col gap-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
        <div className="flex flex-col gap-6">
            <form action={saveSnippetAction} className="flex items-center justify-between border-b border-white border-opacity-30 pb-4">
                {/* Changed text-black back to text-white for consistency with the dark glassmorphism theme */}
                <h1 className="font-bold text-4xl text-black drop-shadow-md">
                    Your Code Editor:
                </h1>
                <Button 
                    type="submit" 
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-lime-600 text-white font-bold shadow-lg hover:from-green-600 hover:to-lime-700 transition-all duration-300 ease-in-out"
                >
                    Save Changes
                </Button>
            </form>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <Editor
                    height="70vh"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue={code}
                    onChange={changeEvenHandler}
                    options={{
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        fontSize: 16,
                        fontFamily: 'Fira Code, Consolas, "Courier New", monospace',
                        wordWrap: 'on',
                    }}
                />
            </div>
        </div>
    </div>
    
  );
};

export default EditSnippetForm;