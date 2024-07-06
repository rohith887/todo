import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoList, deleteFromList } from "./redux/Slices/TodoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";


function App() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const TodoList=useSelector((state)=>state.todo.todo);
 
  function hanldeAddtoList(e){
    let trimmedData = data;
  if (data.length > 30) {
    trimmedData = data.substring(0, 30) + '...';
  }
     
      if(data.length>0){
        dispatch(addtoList(trimmedData));
        setData('');

      }
     
  }
  function handleDelete(id) {
    dispatch(deleteFromList(id))
  }

  return (
    <div className="App ">
      <div className="flex flex-col w-full h-screen p-8 mx-0 bg-white">
        <h1 className="flex justify-center text-3xl font-bold" >My Todo's</h1>
        <div className="flex items-center justify-center w-full h-auto gap-2 m-4 md:p-8 ">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data}
            placeholder="Enter your todo"
            className="border-2  border-gray-200 outline-none w-full md:w-[60%] h-10 p-2 md:p-4 rounded-md text-gray-400 "
          />

<AiOutlinePlus onClick={hanldeAddtoList}
className="p-1 text-3xl transition-all ease-linear border-2 border-gray-600 rounded-md cursor-pointer hover:text-white hover:bg-black hover:border-none"
/>
         
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row ">
          {TodoList.length > 0 ? (
            TodoList.map((item, index) => (
              <div key={index} className="relative flex items-center justify-center h-40 border-2 border-gray-200 rounded-md md:w-60" style={{ background: item.color }}>
                <h1 className="text-center">{item.text}</h1>
               
                <div className="absolute top-0 right-0 mt-2 mr-2 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-100">
                  <RiDeleteBin6Line
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-500 transition-all duration-300 ease-in-out cursor-pointer hover:text-red-500"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full pt-40">
            <p className="text-2xl font-bold ">No todos yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
