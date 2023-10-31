import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-base">
            What is the VAT and demand charge on prepaid meter recharge?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            The VAT is 5% on the energy recharged and demand charge is 35 taka
            on per kWh sanction load. It is to be noted that, the demand charge
            is deducted once a month.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base">
            What is sanction load?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Sanction load is the maximum electric power that can be used by the
            customer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
