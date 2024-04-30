import React, { useState } from "react";
import UserList from "./UserList";
import { Link,useLocation } from "react-router-dom";
import user from "../data";
import { useContext } from "react";
import { Detailcontext } from "../Context/Details";
import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
function sidebar2comp() {
  const res = user;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [SearchCalled, setSearchCalled] = useState(false);
  const counterState = useContext(Detailcontext);
  const handleSearch = () => {
    const results = res.filter((item) => {
      // Check if the ID or username includes the search term
      return (
        item.id.toString().includes(searchTerm) ||
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(results);
    if (searchResults) {
      setSearchCalled(true);
      counterState.setdata(results);
      
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full h-full  bg-[#2d2d2d]">
      <div className="w-full h-14 flex items-center sticky  ">
        <div className="h-full w-[90%] flex items-center p-4">
          
        <input
          className="Input rounded-full p-2  h-10 w-[100%] text-slate-950"
          type="text"
          id="firstName"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search ID/ Name.."
        />
          
        </div>
        <div className="bg-white w-[10%] h-[60%] flex justify-center items-center">
        <Link to="/">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>

        </Link>

        </div>
      </div>

      {/* message chat component  */}

      <div className="border-2 border-black h-full w-full flex-col gap-7">
        <Accordion.Root type="multiple" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="">
              {" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="white"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
            </Accordion.Trigger>
            <Accordion.Content>
              {res.map((item) => (
                <div className="box-border mt-2  cursor-pointer" key={item.id}>
                  <UserList {...item} />
                </div>
              ))}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}

export default sidebar2comp;
