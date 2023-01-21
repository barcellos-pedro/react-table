type StatusPendingProps = {
  text: string;
};

export default function StatusPending({ text }: StatusPendingProps) {
  return (
    <>
      <div className="flex gap-2 items-center w-24 justify-between">
        {text}
        <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
      </div>
    </>
  );
}
