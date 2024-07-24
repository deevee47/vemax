"use client"
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  const [formState, setFormState] = useState({});

  const handleChange = (e : any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formState).toString(),
    })
      .then(() => {
        alert("Form submitted successfully!");
        form.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <main className="flex-grow px-8 md:px-6 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8 p-10">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl/tight text-gray-800 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 text-lg">We'd love to hear from you.</p>
            </div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-semibold">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                className="w-full bg-black text-white font-bold py-3 px-4 rounded-md"
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </div>
        </main>
        <div className="w-20 bg-white flex flex-col items-center justify-center space-y-12 shadow-lg">
          <SocialIcon Icon={FaInstagram} label="Instagram" />
          <SocialIcon Icon={FaFacebook} label="Facebook" />
          <SocialIcon Icon={FaMapMarkerAlt} label="Maps" />
        </div>
      </div>
    </TooltipProvider>
  );
}

function SocialIcon({ Icon, label } : any) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Icon className="w-10 h-10 text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer transform hover:scale-110" />
      </TooltipTrigger>
      <TooltipContent>
        <p className="px-2 py-1">Click to view {label}</p>
      </TooltipContent>
    </Tooltip>
  );
}