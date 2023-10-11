"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  rechargeAmount: z.number().min(0, {
    message: "Username must be at least 2 characters.",
  }),
  sanctionLoad: z.number().min(0, {
    message: "Input Greater Number Please.",
  }),
  firstTime: z.enum(["yes", "no"], {
    required_error: "You need to select one option.",
  }),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rechargeAmount: 0,
      sanctionLoad: 0,
      firstTime: "yes",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const x = values;
    console.log(x);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-xl font-bold">Prepaid Meter Energy Calculator</h1>
        <FormField
          control={form.control}
          name="rechargeAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Recharge Amount (BDT)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...form.register("rechargeAmount", { valueAsNumber: true })}
                />
              </FormControl>
              <FormDescription>Provide Amount Recharged.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sanctionLoad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meter Sanction Load</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...form.register("sanctionLoad", { valueAsNumber: true })}
                />
              </FormControl>
              <FormDescription>Provide Sanction Load Amount.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstTime"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Is it your first time recharging the meter?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-green" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
