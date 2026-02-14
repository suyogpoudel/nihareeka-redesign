"use client";

import { RegisterFormData, RegisterFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { FieldGroup, Field, FieldLabel, FieldError } from "./ui/field";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { ChevronDown } from "lucide-react";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from "./ui/select";

const defaultValues: RegisterFormData = {
  faculty: "B.Sc. CSIT", // default faculty
  name: "",
  dob: null, // default to today
  fatherName: "",
  motherName: "",
  email: "",
  phone: "",
  address: "",
  entranceMarks: "",
  entranceRoll: "",
  schoolName: "", // required for non-MBS
  collegeName: "", // optional for non-MBS
};

const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues,
  });

  const onRegister = async (data: RegisterFormData) => {
    setTimeout(() => {
      console.log("Registered Successfully");
      toast.success("Registered Successfully");
      form.reset();
      console.table(data);
    }, 1000);
  };

  return (
    <form
      className="max-w-md w-full mx-auto space-y-4"
      onSubmit={form.handleSubmit(onRegister)}
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
                Name
              </FieldLabel>
              <Input
                {...field}
                id="name"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="John Doe"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="dob"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel className="px-3 text-primary font-medium">
                Date of Birth
              </FieldLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    data-empty={!field.value}
                    className="data-[empty=true]:text-muted-foreground w-full justify-between text-left font-normal"
                  >
                    <span>
                      {field.value
                        ? format(field.value, "PPP")
                        : "Select date of birth"}
                    </span>
                    <ChevronDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    captionLayout="dropdown"
                    mode="single"
                    selected={field.value || undefined}
                    onSelect={field.onChange}
                    className="border-0"
                    defaultMonth={field.value || new Date(2005, 0)}
                  />
                </PopoverContent>
              </Popover>
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="fatherName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="fatherName"
                className="px-3 text-primary font-medium"
              >
                Father's Name
              </FieldLabel>
              <Input
                {...field}
                id="fatherName"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="John Doe Sr."
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="motherName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="motherName"
                className="px-3 text-primary font-medium"
              >
                Mother's Name
              </FieldLabel>
              <Input
                {...field}
                id="motherName"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Jane Doe"
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
                Email
              </FieldLabel>
              <Input
                {...field}
                id="email"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="johndoe@example.com"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="phone"
                className="px-3 text-primary font-medium"
              >
                Phone
              </FieldLabel>
              <Input
                {...field}
                id="phone"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="98xxxxxxxx"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="address"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="address"
                className="px-3 text-primary font-medium"
              >
                Address [Provice, District, Tole]
              </FieldLabel>
              <Input
                {...field}
                id="address"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Province, District, Tole"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="faculty"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="faculty"
                className="px-3 text-primary font-medium"
              >
                Faculty / Program
              </FieldLabel>

              <Select
                onValueChange={(value) => field.onChange(value)}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Faculty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="B.Sc. CSIT">B.Sc. CSIT</SelectItem>
                  <SelectItem value="BCA">BCA</SelectItem>
                  <SelectItem value="BIM">BIM</SelectItem>
                  <SelectItem value="BHM">BHM</SelectItem>
                  <SelectItem value="BBS">BBS</SelectItem>
                  <SelectItem value="MBS">MBS</SelectItem>
                </SelectContent>
              </Select>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {form.watch("faculty") === "MBS" ? (
          <Controller
            name="collegeName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel
                  htmlFor="collegeName"
                  className="px-3 text-primary font-medium"
                >
                  College Name
                </FieldLabel>
                <Input
                  {...field}
                  id="collegeName"
                  placeholder="Your College Name"
                  className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        ) : (
          <Controller
            name="schoolName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel
                  htmlFor="schoolName"
                  className="px-3 text-primary font-medium"
                >
                  School/College Name
                </FieldLabel>
                <Input
                  {...field}
                  id="schoolName"
                  placeholder="Your School/College Name"
                  className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        )}
        <Controller
          name="entranceMarks"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="entranceMarks"
                className="px-3 text-primary font-medium"
              >
                TU Entrance Marks
              </FieldLabel>
              <Input
                {...field}
                id="entranceMarks"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Enter TU Entrance Marks"
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="entranceRoll"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor="entranceRoll"
                className="px-3 text-primary font-medium"
              >
                TU Entrance Roll Number
              </FieldLabel>
              <Input
                {...field}
                id="entranceRoll"
                className="w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                placeholder="Enter TU Entrance Roll Number"
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
        {form.formState.isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
