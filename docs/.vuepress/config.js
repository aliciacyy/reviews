import { defaultTheme } from "vuepress";

export default {
  theme: defaultTheme({
    base: '/reviews/',
    logo: '/logo.png',
    lang: "en-US",
    title: "Reviews",
    description: "Bite-sized reviews of hotels and stuff",
    sidebar: [
      {
        text: "Hotels",
        link: "/",
        children: [{
            text: "Singapore",
            link: "",
            children: ["/hotels/Hotel_G.md", "/hotels/ParkRoyal.md"],
          }
        ],
      },
    ]
  }),
};
