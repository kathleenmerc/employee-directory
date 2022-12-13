export default function ContactInfoBody({ label, labelInfo }) {
    return (
      <div className="contactInfoBody">
        <div className="labels">{label}</div>
        <div className="labelInfo">{labelInfo}</div>
      </div>
    );
  }
  