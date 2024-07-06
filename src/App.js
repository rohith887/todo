import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoList, deleteFromList } from "./redux/Slices/TodoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

function App() {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const TodoList = useSelector((state) => state.todo.todo);
  const [select, setSelect] = useState(false);
  const [theme, setTheme] = useState('white');
  const [font, setFont] = useState('black');

  function handleAddtoList() {
    let trimmedData = data;
   if(data.length>130){
    trimmedData=data.substring(0,130)+'...';
   }
    if (data.length > 0) {
      dispatch(addtoList(trimmedData));
      setData('');
    }
  }

  function handleDelete(id) {
    dispatch(deleteFromList(id));
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleAddtoList();
    }
  }

  function handleTheme() {
    setSelect(!select);
    if (select) {
      setTheme('white');
      setFont('black');
    } else {
      setTheme('black');
      setFont('white');
    }
  }

  return (
    <div className="App" style={{ backgroundColor: theme }}>
      <div className="flex flex-col w-full h-screen p-8 mx-0">
        <h1 style={{color:font}} className="flex justify-center text-3xl font-bold">My Todo's</h1>
        <div style={{color:font}} className="flex justify-end w-full px-5 md:w-[80%] mt-[-36px]">
          {
            select ? 
              <MdOutlineLightMode onClick={handleTheme} className="right-0 w-8 h-8 font-bold" /> :
              <CiDark onClick={handleTheme} className="right-0 w-8 h-8 font-bold" />
          }
        </div>

        <div style={{color:font}} className="flex items-center justify-center w-full h-auto gap-2 m-4 md:p-8">
          <input
            onChange={(e) => setData(e.target.value)}
            onKeyDown={handleKeyDown}
            value={data}
            placeholder="Enter your todo"
            className="border-2 border-gray-200 outline-none w-full md:w-[60%] h-10 p-2 md:p-4 rounded-md text-gray-400"
          />
         
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-4 md:flex-row">
          {TodoList.length > 0 ? (
            TodoList.map((item, index) => (
              <div key={index} className="relative flex w-full h-40 p-5 border-2 border-gray-200 rounded-md md:max-w-60" style={{ background: item.color }}>
                <h1 className="text-center break-all">{item.text}</h1>
                <div className="absolute top-0 right-0 mt-2 mr-2 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-100">
                  <RiDeleteBin6Line
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-500 transition-all duration-300 ease-in-out cursor-pointer hover:text-red-500"
                  />
                </div>
              </div>
            ))
          ) : (
            <div style={{color:font}} className="flex items-center justify-center w-full h-full pt-40">
              <p className="text-2xl font-bold">No todos yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
