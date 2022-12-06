export default function CardBody({ name, position }) {
  return (
    <div className="cardBody">
      <div className="cardName">{name}</div>
      <div className="cardPosition">{position}</div>
    </div>
  );
}
