import { NavsType } from "@/types";

import LineChart from "../LineChart";

interface Props {
  navs: NavsType;
}

const NavsComponent = ({ navs }: Props): JSX.Element => {
  return (
    <div className="p-4">
      <LineChart navs={navs} />
    </div>
  );
};

export default NavsComponent;
