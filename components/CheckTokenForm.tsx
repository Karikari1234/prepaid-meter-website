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
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/app/serverActions";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import mOnSubmit from "./OnSubmitMeterNo";
import { useTokenResStore } from "@/lib/global/store";

const formSchema = z.object({
  meterNo: z
    .string({
      required_error: "Meter Number is required",
    })
    .min(12, {
      message: "Minimum 12 digits required",
    }),
});

interface CheckInput {
  meterNo: string;
}

const defaultCheckInput: CheckInput = {
  meterNo: "010100000010",
};

export function CheckInputForm() {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const { responseBody, setResponseBody } = useTokenResStore();
  //setResponseBody(null);
  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(true));
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  //const toast = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const resObj = await mOnSubmit(values);
      setResponseBody(null);
      setResponseBody(resObj);
      //console.log(responseBody);
      router.push("/check-token/tokenInfo");
    } catch (error) {
      console.log(error);
    }
  }

  const [key, setKey] = useState(0);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        key={key}
      >
        <h1 className="text-2xl font-bold">
          Check Last 3 Recharge Token Numbers
        </h1>

        <div className="text-lg">
          <FormField
            control={form.control}
            name="meterNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meter No</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Input your 12 digit meter number"
                    {...form.register("meterNo")}
                  />
                </FormControl>
                <FormDescription>Provide meter number.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            ref={recaptchaRef}
            onChange={handleCaptchaSubmission}
          />
        </div>

        <div className="space-x-4">
          <Button
            className="w-full bg-green"
            type="submit"
            disabled={!isVerified}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
