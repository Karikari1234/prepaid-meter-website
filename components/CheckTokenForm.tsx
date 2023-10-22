"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast, useToast } from "@/components/ui/use-toast";
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
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

const formSchema = z.object({
  meterNo: z
    .string({
      required_error: "Meter Number is required",
    })
    .min(12, {
      message: "Minimum 12 digits required",
    }),
  customerNo: z.string(),
});

interface CheckInput {
  meterNo: string;
  customerNo: string;
}

const defaultCheckInput: CheckInput = {
  meterNo: "010100000010",
  customerNo: "3214789",
};

export function CheckInputForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  //const toast = useToast();

  function onSubmit(values: z.infer<typeof formSchema>) {
    //call api and route to new page with result.
    if (values.customerNo) {
      router.push(`/check-token/${values.meterNo}/${values.customerNo}`);
    } else {
      router.push(`/check-token/${values.meterNo}`);
    }
  }

  useEffect(() => {
    //window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [val, setVal] = useState(defaultCheckInput);
  const [key, setKey] = useState(0);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        key={key}
      >
        <h1 className="text-2xl font-bold">Check Last 3 Token Numbers</h1>

        <div className="text-lg">
          <FormField
            control={form.control}
            name="meterNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meter No</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input your 13 digit meter number"
                    {...form.register("meterNo")}
                  />
                </FormControl>
                <FormDescription>Provide Meter Number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customerNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Number (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input customer number"
                    {...form.register("customerNo")}
                  />
                </FormControl>
                <FormDescription>Provide Customer Number</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-x-4">
          <Button className="bg-green" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
