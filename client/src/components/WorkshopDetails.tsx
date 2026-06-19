import { workshopDetails } from "../data/workshopData";

function WorkshopDetails() {
  return (
    <section id="details" className="bg-white px-4 py-20 sm:px-6 lg:px-12 2xl:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Workshop Details
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Everything parents need to know
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            A simple, structured, and beginner-friendly online workshop designed
            for young learners who are curious about AI and robotics.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {workshopDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm">
                  <Icon size={24} />
                </div>

                <p className="mt-6 text-sm font-semibold text-slate-500">
                  {item.label}
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-950">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;