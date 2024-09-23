import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  mainText: ReactNode;
  tagText?: ReactNode;
  mainTextStyle?: string;
  tagTextStyle?: string;
  wrapperClassName?: string;
};

const TableRowData = ({
  mainText,
  tagText,
  mainTextStyle,
  tagTextStyle,
  wrapperClassName,
}: Props) => {
  return (
    <div className={twMerge("text-left", wrapperClassName)}>
      <p
        className={twMerge(
          "text-black font-semibold capitalize",
          mainTextStyle
        )}
      >
        {mainText}
      </p>
      <p className={twMerge(tagTextStyle, "text-grey text-sm capitalize")}>
        {tagText}
      </p>
    </div>
  );
};

export default TableRowData;
