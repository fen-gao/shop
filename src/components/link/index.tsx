import { styled } from "@/styles";

export const Link = styled("a", {
  color: "$green500",
  fontSize: "$medium",
  fontWeight: "bold",
  cursor: "pointer",

  transition: "background-color 0.2s, color 0.2s",

  "&:hover": {
    color: "$green300",
  },
});
