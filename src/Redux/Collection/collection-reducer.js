const INITIAL_STATE = {
  collection: [
    {
      id: 1,
      title: "Popular",
      start: 30,
      end: 40,
    },
    {
      id: 2,
      title: "Top Rated",
      start: 10,
      end: 20,
    },
    {
      id: 3,
      title: "Highest Grossing",
      start: 20,
      end: 30,
    },
    {
      id: 4,
      title: "Most Liked",
      start: 0,
      end: 10,
    },
    // {
    //   id: 5,
    //   title: "Most Liked",
    //   start: 40,
    //   end: 50,
    // },
  ],
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
