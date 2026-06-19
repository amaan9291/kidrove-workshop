import { CheckCircle2 } from "lucide-react";
import { learningOutcomes } from "../data/workshopData";

function LearningOutcomes() {
  return (
    <section
      id="outcomes"
      className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white px-4 py-20 sm:px-6 lg:px-12 2xl:px-20"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Learning Outcomes
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            What children will learn
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            The workshop focuses on practical understanding, creativity, and
            confidence. Children learn technology concepts in a simple and
            enjoyable way.
          </p>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
            <p className="text-lg font-black text-slate-950">
              Designed for ages 8–14
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              No prior coding or robotics knowledge is required. The workshop
              starts from the basics and keeps learning fun.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {learningOutcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-orange-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CheckCircle2 className="text-orange-500" size={28} />

              <p className="mt-4 text-base font-semibold leading-7 text-slate-700">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;
