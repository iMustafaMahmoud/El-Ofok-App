import { useSelector } from "react-redux";

export const FakeStudentsService = () => {
  const { users, filters } = useSelector((state) => state);

  let finalUsers = [...users];

  if (filters !== null && filters !== "All") {
    finalUsers = finalUsers.filter((user) => {
      return filters === user.Status;
    });
  }

  return finalUsers;
};
