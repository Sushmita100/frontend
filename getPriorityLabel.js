import { UrgentIcon, HighPriorityIcon, MediumPriorityIcon, LowPriorityIcon, NoPriorityIcon } from '../icons/PriorityIcons.js';

export const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return (
        <>
          <UrgentIcon /> Urgent
        </>
      );
    case 3:
      return (
        <>
          <HighPriorityIcon /> High
        </>
      );
    case 2:
      return (
        <>
          <MediumPriorityIcon /> Medium
        </>
      );
    case 1:
      return (
        <>
          <LowPriorityIcon /> Low
        </>
      );
    case 0:
      return (
        <>
          <NoPriorityIcon /> No Priority
        </>
      );
    default:
      return null; // You can also return a default message or component here if needed
  }
};
