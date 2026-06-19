import { whyChooseUs } from "../data/workshopData";

function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-12 2xl:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Why Choose This Workshop
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Built for young innovators
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            The workshop is designed to be simple, interactive, safe, and
            enjoyable for children while giving parents confidence in the
            learning experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;