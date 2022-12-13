import ContactProfile from "./ContactProfile.js";
import ContactInfoList from "./ContactInfoList";

export default function ContactEmployeeProfile(props) {
  return (
    <div className="contactEmployeeProfile">
      <ContactProfile />
      <ContactInfoList />
    </div>
  );
}
