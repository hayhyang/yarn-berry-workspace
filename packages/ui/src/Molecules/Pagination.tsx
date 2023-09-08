import Button from "Atoms/Button";

interface PaginationProps {
  total: number;
  rows: number;
  currentPage: number;
  handler: () => null;
}

const Pagination = (props: PaginationProps) => {
  const { total, rows, currentPage, handler } = props;

  return (
    <div>
      <Button variant="default" onClick={handler} size="small">
        1
      </Button>
    </div>
  );
};

export default Pagination;
