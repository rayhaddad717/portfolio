export default function SideBubbles(
  { state }: { state: 1 | 2 | 3 | 4 } = { state: 1 }
) {
  const states = [
    [
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    [
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
    ],
    [
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
      "red",
      "red",
      "green",
    ],
  ];
  const index = state ? state - 1 : 0;
  return (
    <ul
      className="grid grid-cols-3 w-fit gap-[4px] mt-[2rem]"
      style={{
        marginLeft: state % 2 === 1 ? "auto" : "3px",
        marginRight: state % 2 === 0 ? "auto" : "3px",
      }}
    >
      {states[index].map((bubble, index) => (
        <li
          key={index}
          className="h-[8px] w-[8px] rounded-full"
          style={{ background: `var(--color-${bubble})` }}
        ></li>
      ))}
    </ul>
  );
}