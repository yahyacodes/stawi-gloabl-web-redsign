import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Navbar from "./components/Navbar.vue";
import HeroPage from "./components/HeroPage.vue";
import WhatWeDo from "./components/WhatWeDo.vue";
import AboutUs from "./components/AboutUs.vue";
import Testimonials from "./components/Testimonials.vue";
import FAQs from "./components/FAQs.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.component("navbar", Navbar);
app.component("hero-page", HeroPage);
app.component("what-we-do", WhatWeDo);
app.component("about-us", AboutUs);
app.component("testimonials", Testimonials);
app.component("fa-qs", FAQs);
app.component("footer-page", Footer);

app.mount("#app");
