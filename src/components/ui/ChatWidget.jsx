import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageSquare, X } from "lucide-react";
import responses from "@/components/ui/data/responses.json";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    const responseText =
      responses[inputValue.toLowerCase().trim()] ||
      "I'm sorry, I can only answer questions about selling licenses. Try asking 'How do I sell my license?'.";
    const botMessage = { sender: "bot", text: responseText };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue("");
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <Button
          size="icon"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-8 w-8 text-primary-foreground" />
        </Button>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 flex flex-col h-[70vh] max-h-[600px]">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-lg font-semibold">
              SoftSell Assistant
            </DialogTitle>
            <DialogDescription>
              Ask us anything about selling your licenses!
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow p-4 space-y-4 overflow-y-auto">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground p-4">
                <p>Welcome to SoftSell support!</p>
                <p className="text-sm">
                  Try asking: "How do I sell my license?"
                </p>
              </div>
            )}
          </div>
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              className="flex-grow h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button
              type="submit"
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Send
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatWidget;
