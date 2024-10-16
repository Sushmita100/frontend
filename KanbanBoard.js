import React, { useState, useEffect } from 'react';
import GroupControls from './GroupControls';
import TicketCard from './TicketCard';
import { groupTickets } from '../utils/groupTickets';
import { sortTickets } from '../utils/sortTickets';
import '../styles/KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]); // State for storing users
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check structure
        setTickets(data.tickets || []); // Set tickets data
        setUsers(data.users || []); // Set users data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const groupedTickets = tickets.length ? groupTickets(tickets, groupBy) : {}; // Group tickets by selected criteria

  // Function to find user by userId
  const findUserById = (userId) => users.find(user => user.id === userId);

  return (
    <div className="kanban-container">
      <GroupControls setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <div className="kanban-columns">
        {Object.keys(groupedTickets).map((groupKey) => (
          <div className="kanban-column" key={groupKey}>
            <h3>{groupKey}</h3>
            <div className="kanban-tickets">
              {sortTickets(groupedTickets[groupKey], sortBy).map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} user={findUserById(ticket.userId)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
