import Price from "@/components/price";
import { styled } from "@/styles";

interface ProductItemProps {}

const ProductWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  maxWidth: "696px",
  maxHeight: "656px",

  width: "100%",
  height: "100%",

  borderRadius: "8px",

  position: "relative",

  padding: "4px",

  backgroundImage: "linear-gradient(180deg, #1EA483 , #7465D4)",

  variants: {
    variant: {
      default: {
        backgroundImage: "linear-gradient(180deg, #1EA483 , #7465D4)",
      },
      active: {
        backgroundImage: "linear-gradient(180deg, #4EA8DE , #5E60CE)",
      },
    },
  },
});

const ProductItem = (props: ProductItemProps) => {
  return (
    <ProductWrapper variant="active">
      <img src="" alt="" />
      <Price />
    </ProductWrapper>
  );
};

export default ProductItem;
