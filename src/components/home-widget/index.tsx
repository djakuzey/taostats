export interface HomeWidgetProps {
  label: string;
  value: string;
}

const HomeWidget = ({
  label,
  value,
}: HomeWidgetProps) => {

  return (
    <div className="flex flex-col border-t max-w-[126px]">
      <span className="text-[14px] text-secondaryText mb-1 pt-2">
        {label}
      </span>
      <span className="text-[20px] text-white">
        {value}
      </span>
    </div>
  );
};

export default HomeWidget;
