import FAQAccordion from "@/components/FAQ";

const FAQ = () => {
  return (
    <div className="md:mx-auto md:w-5/6">
      <h1 className="heading-text mb-4 !text-left !text-5xl md:mb-8">
        Frequently Asked Questions
      </h1>
      <FAQAccordion></FAQAccordion>
    </div>
  );
};

export default FAQ;
