import React from 'react';
import '../styles/TicketCard.css'; // Optional: Add styles

const TicketCard = ({ ticket, user }) => {
  const renderStatusIcon = (status) => {
    switch (status) {
      case 'Todo':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#B8B8B8" strokeWidth="2" />
          </svg>
        );

      case 'In progress':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="white" stroke="#F2BE00" strokeWidth="2" />
            <path d="M9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9C8.10457 9 9 8.10457 9 7Z" stroke="#F2BE00" strokeWidth="4" />
          </svg>
        );

      case 'Backlog':
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#95999F" strokeWidth="2" strokeDasharray="1.4 1.74" />
          </svg>
        );

      default:
        return null; // Handle any unexpected status
    }
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-status-icon">{renderStatusIcon(ticket.status)}</span>
        <h4>{ticket.title}</h4>
      </div>
      <p>
        <span className="ticket-status">{renderStatusIcon(ticket.status)} {ticket.status}</span>
      </p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Tags:</strong> {ticket.tag.join(', ')}</p>
      {user && (
        <>
          <p><strong>Assigned to:</strong> {user.name}</p>
          <p><strong>Available:</strong> {user.available ? 'Yes' : 'No'}</p>
        </>
      )}
    </div>
  );
};

export default TicketCard;
