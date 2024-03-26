export const Breadcrumb = ({
  categories,
}: {
  categories: string[] | undefined;
}) => {
  return (
    <nav className="breadcrumb">
      {categories && categories.length > 0 && (
        <ul>
          {categories.map((category: string, index: number) => (
            <>
              <li key={index + 1}>{category}</li>
              {index + 1 !== categories.length ? ">" : ""}
            </>
          ))}
        </ul>
      )}
    </nav>
  );
};
