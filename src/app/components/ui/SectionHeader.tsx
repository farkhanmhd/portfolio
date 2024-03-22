const SectionHeader = ({
  title,
  subtitle = "",
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="relative left-0 top-0 mx-auto w-[80%] py-20 md:py-32">
      <h1 className="text-5xl font-bold dark:text-white md:text-7xl">
        {title.toUpperCase()}
      </h1>
      {subtitle.length > 0 && (
        <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
