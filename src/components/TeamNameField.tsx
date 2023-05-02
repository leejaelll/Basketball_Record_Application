export default function TeamNameField({ teamName }) {
  return (
    <div className="text-2xl font-semibold flex justify-center">
      <label htmlFor="teamName" className="mr-2">
        TEAM
      </label>
      <input
        type="text"
        id="teamName"
        placeholder="팀명"
        defaultValue={teamName}
        className="w-40"
      />
    </div>
  );
}
