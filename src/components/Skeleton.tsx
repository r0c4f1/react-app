export function Skeleton() {
  return (
    <div className="flex w-74 grow-1 flex-col gap-4 m-10">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}
