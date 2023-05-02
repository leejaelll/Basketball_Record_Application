export default function TeamScore({ teamName, teamScore }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg">{teamName}</h3>
      <div className="text-5xl">{teamScore}</div>
    </div>
  );
}
