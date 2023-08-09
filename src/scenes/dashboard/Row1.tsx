import { useGetKpisQuery } from "@/state/api";
// comp
import DashboardBox from "@/components/DashboardBox";

const Row1 = () => {
  const api = useGetKpisQuery();

  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;
