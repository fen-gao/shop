import { styled } from "@/styles";

export const Button = styled("button", {
  minWidth: 112,
  minHeight: 69,
  backgroundColor: "$green500",
  color: "$white",
  borderRadius: 8,
  cursor: "pointer",

  fontSize: "$medium",
  fontWeight: "bold",

  border: "none",

  transition: "background-color 0.2s, color 0.2s",

  "&:hover": {
    backgroundColor: "$green300",
  },
});
