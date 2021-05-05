//Fetch APIs from old project

//TODO Route for getting trees for a user

  const [trees, setTrees] = useState([]);

  const fetchTrees = async () => {
    return await fetch("/trees/<username>/")
      .then((response) => response.json())
      .then((data) => {
        setTrees(data);
      });
  };

//TODO Route for adding a tree

const addTree = async (tree) => {
  const res = await fetch("/trees/<username>/", {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tree),
  });
  const data = await res.json();
  setTrees([...trees, data]);
};

