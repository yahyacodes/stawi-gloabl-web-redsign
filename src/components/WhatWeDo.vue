<template>
  <section class="py-40">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="max-w-3xl">
        <h1 class="text-gray-900 text-xl font-extrabold sm:text-2xl">
          What Do We Offer?
        </h1>
        <p class="text-gray-500 mt-2">
          We offer a wide range of mental health services to help caregivers to
          in turn increase the quality of healthcare
        </p>
      </div>

      <div
        class="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-2 bg-white rounded-[32px]"
      >
        <img src="../assets/Therapy-1.png" alt="" class="w-screen" />
        <div class="space-y-2 mt-20">
          <h1 class="text-gray-900 mb-5 text-lg font-extrabold sm:text-2xl">
            Therapy
          </h1>
          <p class="text-gray-400 max-w-md">
            A personalized and comprehensive wellness app has been created that
            is convenient, cost effective and evidence based for nurses,
            simplifying therapy via chat, video, AI chatbox,AI companion.
          </p>
          <div class="space-y-6 sm:flex sm:space-y-0">
            <a
              class="block py-2 px-4 text-white font-medium bg-black rounded-3xl shadow-lg hover:shadow-none"
            >
              Book Therapy Session
            </a>
          </div>
        </div>
      </div>

      <div class="mt-4 grid gap-0 sm:grid-cols-2 lg:grid-cols-2">
        <article
          class="max-w-xl mx-auto mt-4 shadow-lg border duration-300 hover:shadow-sm bg-white rounded-[40px]"
        >
          <a>
            <img
              src="../assets/Therapy-2.png"
              loading="lazy"
              class="w-full rounded-t-md"
            />
            <div class="mb-3 p-4">
              <h3 class="text-lg text-gray-900 font-extrabold">Therapy</h3>
              <p class="text-gray-400 mt-1 mb-5">
                A personalized and comprehensive wellness app has been created
                that is convenient, cost effective and evidence based for
                nurses, simplifying therapy via chat, video, AI chatbox,AI
                companion.
              </p>
              <div class="space-y-6 sm:flex sm:space-y-0">
                <a
                  class="block py-2 px-4 text-white font-medium bg-black rounded-3xl shadow-lg hover:shadow-none"
                >
                  Book Therapy Session
                </a>
              </div>
            </div>
          </a>
        </article>

        <article
          class="max-w-xl mx-auto mt-4 shadow-lg border duration-300 hover:shadow-sm bg-white rounded-[40px]"
        >
          <a>
            <img
              src="../assets/Therapy-2.png"
              loading="lazy"
              class="w-full rounded-t-md"
            />
            <div class="mb-3 p-4">
              <h3 class="text-lg text-gray-900 font-extrabold">Therapy</h3>
              <p class="text-gray-400 mt-1 mb-5">
                A personalized and comprehensive wellness app has been created
                that is convenient, cost effective and evidence based for
                nurses, simplifying therapy via chat, video, AI chatbox,AI
                companion.
              </p>
              <div class="space-y-6 sm:flex sm:space-y-0">
                <a
                  class="block py-2 px-4 text-white font-medium bg-black rounded-3xl shadow-lg hover:shadow-none"
                >
                  Book Therapy Session
                </a>
              </div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntegrationsSection",
  data() {
    return {
      integrations: [
        {
          title: "Figma",
          desc: "Ut enim ad minim veniam",
          icon: "your Figma svg",
        },
        {
          title: "Github",
          desc: "Ut enim ad minim veniam",
          icon: "your Github svg",
        },
        {
          title: "Discord",
          desc: "Ut enim ad minim veniam",
          icon: "your Discord svg",
        },
      ],
    };
  },
};
</script>
