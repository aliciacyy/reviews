import { defaultTheme } from "vuepress";

export default {
  base: "/reviews/",
  description: "Bite-sized reviews of stuff",
  head: [["link", { rel: "shortcut icon", href: "/reviews/favicon.ico" }]],
  theme: defaultTheme({
    logo: "/logo.png",
    lang: "en-US",
    title: "Reviews",
    contributors: false,
    description: "Bite-sized reviews of hotels and stuff",
    sidebar: [
      {
        text: "Hotels",
        link: "/",
        children: [
          {
            text: "Hong Kong",
            link: "",
            collapsible: true,
            children: [
              "/hotels/Casa.md"
            ],
          },
          {
            text: "Indonesia",
            link: "",
            collapsible: true,
            children: [
              "/hotels/The_Evitel_Resort.md",
              "/hotels/Aston.md",
              "/hotels/Doulos_Phos.md"
            ],
          },
          {
            text: "Japan",
            link: "",
            collapsible: true,
            children: [
              "/hotels/nine_hours.md",
              "/hotels/Granbell.md",
              "/hotels/Super_Hotel.md"
            ],
          },
          {
            text: "Malaysia",
            link: "",
            collapsible: true,
            children: [
              "/hotels/Langkapuri.md",
              "/hotels/Sunway.md"
            ],
          },
          {
            text: "Philippines",
            link: "",
            collapsible: true,
            children: [
              "/hotels/Golden_Prince.md",
              "/hotels/Blue_Orchid.md"
            ],
          },
          {
            text: "Singapore",
            link: "",
            collapsible: true,
            children: [
              "/hotels/Amara.md",
              "/hotels/Dorsett.md",
              "/hotels/Hotel_G.md",
              "/hotels/Hotel_Royal.md",
              "/hotels/Innotel.md",
              "/hotels/ParkRoyal.md",
              "/hotels/Yotel_Orchard.md"
            ],
          },
          {
            text: "Taiwan",
            link: "",
            collapsible: true,
            children: [
              "/hotels/Green_World.md"
            ],
          },
          {
            text: "Thailand",
            link: "",
            collapsible: true,
            children: [
              "/hotels/Sugar_Marina.md"
            ],
          },
        ],
      },
    ],
  }),
};
