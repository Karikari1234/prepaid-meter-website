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
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useState } from "react";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

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

interface MeterCharges {
  vat: number;
  demandCharge: number;
  meterRent: number;
  totalCharge: number;
  rebate: number;
  totalEnergy: number;
}

const defaultMeterCharges: MeterCharges = {
  vat: 0.0,
  demandCharge: 0.0,
  meterRent: 0.0,
  totalCharge: 0.0,
  rebate: 0.0,
  totalEnergy: 0.0,
};

export function EnergyCalculatorForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rechargeAmount: 0.0,
      sanctionLoad: 0,
      firstTime: "yes",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const vat: number = (values.rechargeAmount * 5) / 105;
    const demandCharge: number =
      values.firstTime == "yes" ? values.sanctionLoad * 35 : 0.0;
    const meterRent: number = values.firstTime == "yes" ? 40.0 : 0.0;
    const totalCharge: number = vat + demandCharge + meterRent;
    const rebate: number =
      (1 / 101) * (values.rechargeAmount - vat - meterRent);
    const totalEnergy: number = values.rechargeAmount - totalCharge + rebate;
    let res: MeterCharges = {
      ...defaultMeterCharges,
      vat: vat.toFixed(2) as unknown as number,
      demandCharge: demandCharge.toFixed(2) as unknown as number,
      meterRent: meterRent.toFixed(2) as unknown as number,
      totalCharge: totalCharge.toFixed(2) as unknown as number,
      rebate: rebate.toFixed(2) as unknown as number,
      totalEnergy: totalEnergy.toFixed(2) as unknown as number,
    };
    //console.log(res);
    setResult(res);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function onReset() {
    setResult(defaultMeterCharges);
    form.reset({
      rechargeAmount: 0,
      sanctionLoad: 0,
      firstTime: "yes",
    });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [result, setResult] = useState(defaultMeterCharges);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="text-xl font-bold">Prepaid Meter Energy Calculator</h1>
        <div
          className={`${sourceCodePro.className} bg-slate-400 text-sm p-2 rounded-sm`}
        >
          <div>
            <div>VAT(5%): {result.vat} BDT</div>
            <div>
              Demand Charge (Sanction Load*35/kWh Monthly):{" "}
              {result.demandCharge} BDT
            </div>
            <div>Meter Rent (Monthly): {result.meterRent} BDT</div>
            <div>Total Charge: {result.totalCharge} BDT</div>
            <div>Rebate(1%): -{result.rebate} BDT</div>
            <div className="font-semibold">
              <span className="font-semibold">Total Energy Amount:</span>{" "}
              {result.totalEnergy} BDT
            </div>
          </div>
        </div>
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
              <FormDescription>Provide Amount To Be Recharged.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sanctionLoad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meter Sanction Load (in kWh)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="1"
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
              <FormLabel>
                Is it your first time meter recharge this month?
              </FormLabel>
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

        <div className="space-x-4">
          <Button className="bg-green" type="submit">
            Submit
          </Button>
          <Button
            type="reset"
            className="bg-slate-200 hover:bg-slate-300 text-black"
            onClick={onReset}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
