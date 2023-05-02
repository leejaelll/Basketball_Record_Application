import PlayerRow from './PlayerRow';

export default function BoxScore({ team }) {
  return (
    <table className=" border-separate border-spacing-2 border border-slate-400">
      <thead>
        <tr>
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
