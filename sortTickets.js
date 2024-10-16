export const sortTickets = (tickets, sortBy) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority; // Sort by descending priority
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title); // Sort by title alphabetically
      }
      return 0;
    });
  };
  