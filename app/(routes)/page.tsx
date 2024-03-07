import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import CategoryList from "@/components/category-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("099522e6-7a85-4470-bb00-f1e59334edb4");

  return (
    <div>
      <Billboard data={billboard} />
      {/* <Container>
        <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container> */}
      <CategoryList />
    </div>
  );
};

export default HomePage;
