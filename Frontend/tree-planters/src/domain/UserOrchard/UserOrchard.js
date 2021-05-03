const tree_data = [
    {
      tree_id: "1",
      user_id: "1",
      type: "Dummy",
      stage: "Stage0"
    },
    {
      tree_id: "2",
      user_id: "1",
      type: "Dummy",
      stage: "Stage1"
    },
    {
      tree_id: "3",
      user_id: "1",
      type: "Dummy",
      stage: "Stage2"
    },
    {
      tree_id: "4",
      user_id: "1",
      type: "Dummy",
      stage: "Stage3"
    },
    {
      tree_id: "5",
      user_id: "1",
      type: "Dummy",
      stage: "Stage2"
    },
    {
      tree_id: "6",
      user_id: "1",
      type: "Dummy",
      stage: "Stage0"
    },
]
const user_data = {
    username: "Test User"
}

const tree_list=tree_data.map((tree) => {
    return <img src={tree.type + tree.stage + '.png'} alt={tree.type} key={tree.id}/>
})
  
const UserOrchard = () => {
    return (
        <div className="UserForest">
            <h2>{user_data.username}'s Forest</h2>
            <div className="Trees">
                {tree_list}
            </div>
            <h3>Total Trees Planted:</h3>  
            <h3>{tree_data.length}</h3>        
        </div>
    )
}
  
export default UserOrchard
  