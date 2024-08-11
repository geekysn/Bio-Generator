"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    model: z.string().min(1, "Model is required!"),
    temperature: z.number().min(0, "Temperature must be atleast 0!").max(2, "Temperature can be atmost 0!"),
    content: z.string().min(50, "Content should atleast have 50 characters").max(500, "Content should not exceed 500 characters"),
    type: z.enum(["personal", "brand"], {
        errorMap: ()=>({message: "Type is required!"})
    }),
    tone: z.enum(["professional", "casual", "sarcastic", "funny", "passionate", "thoughtful"], {
        errorMap: ()=>({message: "Tone is required!"})
    }),
    emojis: z.boolean()
})

const UserInput = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          model: "llama3-8b-8192",
          temperature: 1,
          content: "",
          type: "personal",
          tone: "professional",
          emojis: false
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className='relative flex flex-col items-start gap-8'>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full items-start">
                <fieldset className='grid gap-6 rounded-[8px] border p-4 bg-background/10 backdrop-blur-md'>
                    <legend>Settings</legend>
                    <div className='grid gap-3'>
                        <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Model</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
            </Form>
        </div>
    )
}

export default UserInput