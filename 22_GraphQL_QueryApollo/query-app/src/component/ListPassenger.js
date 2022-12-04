import ListItem from "./ListItem";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useState } from "react";
import { GetUser, GetUserByID } from "../query/Query";

const ListPassenger = (props) => {
  const { data: dataSuccess, loading: dataLoading, error: dataError } = useQuery(GetUser);
  const [getData, { data: dataIdSuccess, loading: dataIdLoading, error: dataIdError }] =
    useLazyQuery(GetUserByID);

  const [userId, setUserId] = useState(0);

  if (dataError || dataIdError) {
    <p>Error</p>;
  }
  if (dataLoading || dataIdLoading) {
    return <p>Loading...</p>;
  }

  const gettingData = () => {
    getData({
      variables: {
        id: userId,
      },
    });
  };

  const changeDataId = (e) => {
    if (e.target) {
      setUserId(e.target.value);
    }
  };
  return (
    <div>
      <input value={userId} onChange={changeDataId} style={{ marginBottom: "1.25em" }} />
      <button onClick={gettingData}>Search</button>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {dataIdSuccess
          ? dataIdSuccess?.graphqlapollo_todolist.map((item) => (
              <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
            ))
          : dataSuccess?.graphqlapollo_todolist.map((item) => (
              <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
            ))}
      </table>
    </div>
  );
};

export default ListPassenger;
