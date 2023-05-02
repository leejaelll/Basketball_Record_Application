export default function TeamNameField({ teamName }) {
  return (
    <div>
      <label htmlFor="teamName">Team </label>
      <input
        type="text"
        id="teamName"
        placeholder="팀명"
        defaultValue={teamName}
      />
    </div>
  );
}
