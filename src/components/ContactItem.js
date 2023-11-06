import { ContactItemButton, ContactItemLi } from "./ContactItem.style";

export const ContactItem = ({ contact, onDelete }) => {
  return (
    <ContactItemLi>
      {contact.name}: {contact.number}
      <ContactItemButton onClick={() => onDelete(contact.id)}>Delete</ContactItemButton>
    </ContactItemLi>
  );
};