export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-40 flex justify-center items-center m-4 border rounded-md">
      {children}
    </div>
  );
}
