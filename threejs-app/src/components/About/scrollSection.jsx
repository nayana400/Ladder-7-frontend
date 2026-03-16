import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSections() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".section");
    panels.pop();

    panels.forEach((panel) => {
      let innerpanel = panel.querySelector(".section-inner");

      let panelHeight = innerpanel.offsetHeight;
      let windowHeight = window.innerHeight;

      let difference = panelHeight - windowHeight;

      let fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: () =>
            fakeScrollRatio
              ? `+=${innerpanel.offsetHeight}`
              : "bottom top",
          pinSpacing: false,
          pin: true,
          scrub: true,
        },
      });

      if (fakeScrollRatio) {
        tl.to(innerpanel, {
          yPercent: -100,
          y: window.innerHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none",
        });
      }

      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.7, opacity: 0.5, duration: 0.9 }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="mt-16">

        {/* Section 1 */}
        <section className="section h-[calc(100vh-64px)] flex justify-center items-center bg-white text-black rounded-xl">
          <div className="section-inner flex flex-col items-center text-center">
            <h1 className="text-[clamp(4rem,12vw,16rem)] font-semibold">
              Section 1
            </h1>
            <img
              src="https://assets.codepen.io/16327/portrait-image-3.jpg"
              className="w-1/2 aspect-square object-cover mt-10 rounded-lg"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="section h-[calc(100vh-64px)] flex justify-center bg-pink-200 text-black rounded-xl">
          <div className="section-inner flex flex-col items-center text-center pb-[20vh]">
            <h1 className="text-[clamp(4rem,12vw,16rem)] font-semibold">
              Section 2
            </h1>

            <div className="max-w-[40ch] p-8 space-y-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <p key={i}>
                  This section is long with text content and needs to be
                  scrollable within before the next slide comes in.
                </p>
              ))}
              <p>This is the end...</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section h-[calc(100vh-64px)] flex justify-center items-center bg-gray-200 rounded-xl">
          <div className="section-inner flex flex-col items-center text-center">
            <h1 className="text-[clamp(4rem,12vw,16rem)] font-semibold">
              Section 3
            </h1>
            <img
              src="https://assets.codepen.io/16327/portrait-image-4.jpg"
              className="w-1/2 aspect-square object-cover mt-10 rounded-lg"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="section h-[calc(100vh-64px)] flex justify-center items-center bg-purple-400 rounded-xl">
          <div className="section-inner flex flex-col items-center text-center">
            <h1 className="text-[clamp(4rem,12vw,16rem)] font-semibold">
              Section 4
            </h1>
            <img
              src="https://assets.codepen.io/16327/portrait-image-2.jpg"
              className="w-1/2 aspect-square object-cover mt-10 rounded-lg"
            />
          </div>
        </section>

      </div>
    </div>
  );
}