import { useLocation } from "react-router-dom";
import faqData from "../data/faqData";

const FAQSection = () => {
  const location = useLocation();
  const path = location.pathname;
  const faqs = faqData.find((faq) => faq.path === path)?.faqs || [];

  return (
    <div className={`my-4 w-full ${path === "/" ? "md:w-10/12" : ""}`}>
      <h2 className={`mb-4 ${path === "/" ? "text-center font-serif" : ""} text-2xl font-bold md:text-3xl`}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-semibold">{faq.question}</h3>
          <p className="text-text-border-dark dark:text-text-border-light text-sm md:text-base">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
