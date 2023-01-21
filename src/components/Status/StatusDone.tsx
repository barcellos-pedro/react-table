type StatusDoneProps = {
  text: string;
};

export default function StatusDone({ text }: StatusDoneProps) {
  return (
    <>
      <div className="flex gap-2 items-center w-24 justify-between">
        {text}
        <div className="h-4 w-4 bg-green-600 rounded-full"></div>
      </div>
    </>
  );
}
