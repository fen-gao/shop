interface PriceProps {}

import { styled } from "@/styles";

export const PriceWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  flexGrow: 1,
  flexBasis: 200,

  width: "100%",
  maxWidth: 688,
  borderRadius: 6,
  padding: "32px",

  backgroundColor: "rgba(0, 0, 0, 0.8)",

  position: "absolute",

  bottom: 4,

  span: {
    color: "$white",
    fontSize: "$medium",
    fontWeight: "bold",
  },

  strong: {
    color: "$green300",
    fontSize: "$medium",
    fontWeight: "bold",
  },
});

const Price = (props: PriceProps) => {
  return (
    <PriceWrapper>
      <span>Camiseta Beyond the Limits</span>
      <strong>R$ 79,90</strong>
    </PriceWrapper>
  );
};

export default Price;
