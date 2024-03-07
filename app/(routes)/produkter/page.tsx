import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getAllProducts from "@/actions/get-all-products";

export const revalidate = 0;

const ProductsPage = async () => {
  const products = await getAllProducts();
  const billboard = await getBillboard("099522e6-7a85-4470-bb00-f1e59334edb4");

  return (
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Alla produkter" items={products} />
        </div>
        </Container>
      </div>
  );
};

export default ProductsPage;
