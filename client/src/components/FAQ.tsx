import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/workshopData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white px-4 py-20 sm:px-6 lg:px-12 2xl:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Questions parents often ask
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Here are a few quick answers to help parents understand the workshop
            before registering.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-3xl bg-white shadow-sm ring-1 ring-orange-100"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-slate-950 sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`shrink-0 text-orange-500 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;