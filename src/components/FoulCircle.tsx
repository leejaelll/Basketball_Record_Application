export default function FoulCircle({ foulCount, setFoul }) {
  // props로 받은 갯수에 따라 원 렌더링하기
  // 5개의 원 중에서 foulCount 숫자만큼 원을 칠하고 나머지는 회색원으로 만든다.
  const handleClick = () => {
    setFoul((foul) => (foul === 5 ? 0 : foul + 1));
  };

  return (
    <ul className="flex gap-0.5">
      {new Array(5).fill(0).map((_, idx) => (
        <li
          key={idx}
          className={`w-6 h-6 rounded-full ${
            idx + 1 <= foulCount ? 'bg-red-400' : 'bg-slate-200'
          }`}
          onClick={handleClick}
        ></li>
      ))}
    </ul>
  );
}
