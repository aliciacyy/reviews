import { defaultTheme } from "vuepress";

export default {
  base: '/reviews/',
  theme: defaultTheme({
    logo: '/logo.png',
    lang: "en-US",
    title: "Reviews",
    contributors: false,
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
