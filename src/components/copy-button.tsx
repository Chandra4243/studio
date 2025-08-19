
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copyToClipboard}
      aria-label="Copy to clipboard"
      className="h-7 w-7"
    >
      {hasCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
