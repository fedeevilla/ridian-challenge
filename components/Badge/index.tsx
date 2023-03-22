import { ReturnType } from "@/types";

interface Props {
  item: ReturnType;
}

const Badge = ({ item }: Props): JSX.Element => {
  return (
    <div
      key={item.item}
      className="flex flex-col px-2 py-2 mr-2 text-xs font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"
    >
      <div className="font-bold text-center">{item.item}</div>
      <div className="text-center font-extralight">
        {item.return.toFixed(2)}
      </div>
    </div>
  );
};

export default Badge;
