const FAQSection = ({ faqs }) => (
  <div>
    <div className="mb-4">
      <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">{faq.question}</h3>
          <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQSection;
