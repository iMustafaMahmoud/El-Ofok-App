const initialState = {
  users: [
    {
      Name: "Hassan Mokhtar Saad",
      Status: "Initial Acceptance",
      Major: "Medicine",
    },
    {
      Name: "Mohamed Samy Abdelal",
      Status: "Initial Acceptance",
      Major: "Medicine",
    },
    {
      Name: "Zakaria Hassan Abdelatif",
      Status: "Under Review",
      Major: "Medicine",
    },
    {
      Name: "Zakaria Mohamed Zakaria",
      Status: "Under Review",
      Major: "Medicine",
    },
    {
      Name: "Omar Mokhtar Ismael",
      Status: "Conditional Acceptance",
      Major: "Medicine",
    },
    {
      Name: "Hassan Mokhtar Saad",
      Status: "Conditional Acceptance",
      Major: "Medicine",
    },
    {
      Name: "Mohamed Samy Abdelal",
      Status: "Rejected",
      Major: "Medicine",
    },
    {
      Name: "Zakaria Hassan Abdelatif",
      Status: "Rejected",
      Major: "Medicine",
    },
    {
      Name: "Zakaria Mohamed Zakaria",
      Status: "Initial Acceptance",
      Major: "Medicine",
    },
    {
      Name: "Omar Mokhtar Ismael",
      Status: "Initial Acceptance",
      Major: "Medicine",
    },
  ],
  filters: null,
  tabsList: [
    "All",
    "Under Review",
    "Initial Acceptance",
    "Conditional Acceptance",
    "Rejected",
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default Reducer;
