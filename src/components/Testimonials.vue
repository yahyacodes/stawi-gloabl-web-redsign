<template>
  <section class="py-14 mb-20">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="max-w-xl">
        <h3 class="text-gray-100 text-lg font-extrabold sm:text-4xl">
          Testimonials
        </h3>
        <p class="mt-3 text-gray-200">
          Don't take it for our word see what the other caregivers say about us
        </p>
      </div>
      <div class="mt-12">
        <div
          class="grid grid-rows-1 grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl"
        >
          <div class="bg-gray-100 p-4 row-span-1 rounded-xl">
            <figure>
              <div class="flex items-center gap-x-4">
                <div>
                  <span class="text-gray-800 text-base font-semibold"
                    >J.P-Stawi Client</span
                  >
                </div>
              </div>
              <blockquote>
                <p class="mt-6 text-gray-700">
                  You made me open my mind and my eyes.Thank you for being you,
                  someone I can trust and respect with my mental health issues.
                  You have made a difference in my life.
                </p>
              </blockquote>
            </figure>
          </div>

          <div
            class="grid grid-rows-2 grid-flow-col gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div class="bg-gray-100 p-4 col-span-1 rounded-xl">
              <figure>
                <div class="flex items-center gap-x-4">
                  <div>
                    <span class="text-gray-800 text-base font-semibold"
                      >J.P-Stawi Client</span
                    >
                  </div>
                </div>
                <blockquote>
                  <p class="mt-6 text-gray-700">
                    You made me open my mind and my eyes.Thank you for being
                    you, someone I can trust and respect with my mental health
                    issues. You have made a difference in my life.
                  </p>
                </blockquote>
              </figure>
            </div>

            <div class="bg-gray-100 p-4 col-span-1 rounded-xl">
              <figure>
                <div class="flex items-center gap-x-4">
                  <div>
                    <span class="text-gray-800 text-base font-semibold"
                      >J.P-Stawi Client</span
                    >
                  </div>
                </div>
                <blockquote>
                  <p class="mt-6 text-gray-700">
                    You made me open my mind and my eyes.Thank you for being
                    you, someone I can trust and respect with my mental health
                    issues. You have made a difference in my life.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "J.P-Stawi Client",
          quote:
            "You made me open my mind and my eyes.Thank you for being you, someone I can trust and respect with my mental health issues. You have made a difference in my life.",
        },
        {
          name: "S.M- Stawi Client",
          quote:
            "For the longest time now, I have never felt calmer and peaceful until I had a session with you.You have that effect on me. I am blessed to have used your therapist.Thank you and God bless you.",
        },
        {
          name: "B.A- Stawi Client",
          quote:
            "Finding a therapist who understands my specific challenges, as a caregiver has made therapy much more fruitful. Thank you Stawi.",
        },
      ],
    };
  },
};
</script>
