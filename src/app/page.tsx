import { Container } from "@/components/container";
import Header from "@/components/header";
import ProductItem from "./product/[:id]/page";

export default function Home() {
  return (
    <Container>
      <Header />
      <ProductItem />
    </Container>
  );
}
