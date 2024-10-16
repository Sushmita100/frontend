export const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((groups, ticket) => {
      const groupKey = ticket[groupBy] || 'Unassigned';
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(ticket);
      return groups;
    }, {});
  };
  