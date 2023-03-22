import NavsComponent from "@/components/Navs";
import PlaceTradeComponent from "@/components/PlaceTrade";
import ReturnComponent from "@/components/Return";
import { ReturnType } from "@/types";

import { api } from "../api";

export default async function Page() {
  return (
    <div className="container m-auto">
      {/* @ts-expect-error Server Component */}
      <Nav />
      <hr />
      {/* @ts-expect-error Server Component */}
      <Returns />
      <hr />
      {/* @ts-expect-error Server Component */}
      <PlaceTrade />
    </div>
  );
}

async function Nav() {
  const navs = await api.fetchNavs();

  return <NavsComponent navs={navs} />;
}

async function Returns() {
  const { top_10: top10 } = await api.fetchTop10();

  const data: ReturnType[] = await Promise.all(
    top10.map(async (simbol) => {
      return {
        simbol,
        return: (await api.fetchReturn(simbol)).return,
      };
    })
  );

  return <ReturnComponent top10={data} />;
}

async function PlaceTrade() {
  return <PlaceTradeComponent />;
}
