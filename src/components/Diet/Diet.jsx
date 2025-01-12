import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Diet = ({ data }) => {
    // const [Data, setData] = useState();
    // // useEffect(() => {
    // //     console.log(data._id)
    // //   }, []);

    // useEffect(() => {
    //     const fetch = async () => {
    //       const response = await axios.get(
    //         "http://localhost:5000/api/dietcharts/",
    //         {headers}
    //       );
    //       setData(response.data);
    //     //   console.log(response);
    //     };
    //     fetch();
    //   }, []);

  return (
    <div className="bg-zinc-800 rounded p-4 flex flex-col">
      <div className="">
        <h2 className="mt-4 text-xl text-white font-semibold">
          Name: {data.name}
        </h2>
        <p className="mt-2 text-zinc-200 font-semibold">Age: {data.age}</p>
        <p className="mt-2 text-zinc-200 font-semibold">
          Gender: {data.gender}
        </p>
      </div>

      <Link to="/adddietform" state={data} className="bg-yellow-50 px-4 py-2 rounded border border-yellow-500 text-yellow-500 mt-4">
        Add Diet
      </Link>
    </div>
  );
};

export default Diet;
