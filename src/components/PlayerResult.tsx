export default function PlayerResult({ player }) {
  const { name, score, rebound, assist, steal, foul } = player;

  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
      <td>{rebound}</td>
      <td>{assist}</td>
      <td>{steal}</td>
      <td>{foul}</td>
    </tr>
  );
}
