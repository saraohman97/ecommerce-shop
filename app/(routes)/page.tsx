import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import CategoryList from "@/components/category-list";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("099522e6-7a85-4470-bb00-f1e59334edb4");

  return (
    <div>
      <Billboard data={billboard} />
      <CategoryList />
    </div>
  );
};

export default HomePage;
