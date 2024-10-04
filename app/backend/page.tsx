import { searchNaturalNutrients } from "@/utils/api/searchNaturalNutrients";

const page = async () => {
  const values = await searchNaturalNutrients("grape");
  console.log(values);
  return <div>test</div>;
};

export default page;
