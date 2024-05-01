<template>
  <nav class="border-b md:border-0 md:static">
    <div
      class="items-center bg-white rounded-bl-[30px] rounded-br-[30px] px-4 max-w-screen-xl mx-auto md:flex md:px-8"
    >
      <div class="flex items-center justify-between md:py-3 md:block">
        <a href="javascript:void(0)">
          <img
            src="../assets/logo.png"
            width="120"
            height="50"
            alt="Float UI logo"
          />
        </a>
        <div class="md:hidden">
          <button
            class="text-gray-900 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            @click="menuOpen()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="[open ? 'block' : 'hidden']"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              :class="[open ? 'hidden' : 'block']"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
        :class="[open ? 'block' : 'hidden']"
      >
        <ul
          class="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0"
        >
          <li
            v-for="link in navigation"
            :key="link.id"
            class="text-gray-900 hover:text-indigo-600"
          >
            <a :href="link.router">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="hidden md:inline-block">
        <a class="py-3 px-5 text-white bg-black rounded-3xl shadow">
          Book Therapy Session
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      navigation: [
        { title: "Home", router: "/Home" },
        { title: "About Us", router: "/About Us" },
        { title: "Services", router: "/Services" },
        { title: "Contact Us", router: "/Contact Us" },
      ],
    };
  },
};
</script>
