import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  COLORS: {
    PRIMARY_BACKGROUND: "#FFF",
    SECUNDARY_BACKGROUND: "#EEE",
    PRIMARY: "#018762",
    SECONDARY: "#1F1F1F",
    TEXT: "#515151",
  },

  FONTS: {
    TEXT: nunito,
  },
};
