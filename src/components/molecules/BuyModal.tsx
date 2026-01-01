import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Zap } from "lucide-react";

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenSymbol: string;
}

export const BuyModal = ({ isOpen, onClose, tokenSymbol }: BuyModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* The Dark Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        
        {/* The Modal Content */}
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-[#101114] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <Dialog.Title className="text-lg font-semibold leading-none tracking-tight text-white">
              Quick Swap: {tokenSymbol}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-400">
              Set your slippage and confirm the transaction.
            </Dialog.Description>
          </div>

          {/* Placeholder Swap UI */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
               <div className="col-span-4 bg-black/50 p-4 rounded border border-white/5 flex justify-between items-center">
                  <span className="text-gray-400">You Pay</span>
                  <span className="text-xl font-bold text-white">0.5 SOL</span>
               </div>
            </div>
            <div className="flex justify-center">
                <div className="p-2 bg-white/5 rounded-full"><Zap className="w-4 h-4 text-yellow-400" /></div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
               <div className="col-span-4 bg-black/50 p-4 rounded border border-white/5 flex justify-between items-center">
                  <span className="text-gray-400">You Receive</span>
                  <span className="text-xl font-bold text-white">1,420 {tokenSymbol}</span>
               </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
             <button 
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
             >
                Cancel
             </button>
             <button 
                className="px-4 py-2 text-sm font-bold bg-[#526FFF] hover:bg-[#6683FF] text-white rounded-md transition-colors"
             >
                Confirm Swap
             </button>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4 text-white" />
              <span className="sr-only">Close</span>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};