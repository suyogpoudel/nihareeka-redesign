"use client";

import { ContactFormData, ContactFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Button } from "./ui/button";

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onContact = async (data: ContactFormData) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again.",
        );
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
      throw new Error(error.message || "Failed to send message");
    }
  };

  return (
    <form
      className="max-w-md w-full mx-auto space-y-4"
      onSubmit={form.handleSubmit(onContact)}
    >
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="name"
                className="px-3 text-primary font-medium"
              >
                John Doe
              </FieldLabel>
              <Input
                {...field}
                id="name"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Name"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="email"
                className="px-3 text-primary font-medium"
              >
                johndoe@example.com
              </FieldLabel>
              <Input
                {...field}
                id="email"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Email"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="subject"
                className="px-3 text-primary font-medium"
              >
                Your reason for messaging
              </FieldLabel>
              <Input
                {...field}
                id="subject"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Subject"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="message"
                className="px-3 text-primary font-medium"
              >
                Your message
              </FieldLabel>
              <Textarea
                {...field}
                id="message"
                rows={5}
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Message"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button
        type="submit"
        size={"lg"}
        className="mx-auto w-full"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
