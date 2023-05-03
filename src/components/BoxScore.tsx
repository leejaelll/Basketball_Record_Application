import PlayerRow from './PlayerRow';

export default function BoxScore({ team }) {
  return (
    <table className="border-separate border-spacing-2 m-5 w-1/2">
      <thead>
        <tr className="text-lg bg-slate-300">
          <th>Name</th>
          <th>Score</th>
          <th>Rebound</th>
          <th>Assist</th>
          <th>Steal</th>
          <th>Foul</th>
        </tr>
      </thead>
      <tbody>
        {team.map((element) => (
          <PlayerRow key={element.id} player={element} />
        ))}
      </tbody>
    </table>
  );
}
