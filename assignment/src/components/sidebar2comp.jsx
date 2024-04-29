import React, { useState } from "react";
import UserList from "./UserList";
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
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto scroll-smooth bg-[#2d2d2d]">
      <div className="w-full h-14 flex items-center sticky  ">
        <input
          className="Input rounded-full p-2  h-10 w-5/6 "
          type="text"
          id="firstName"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search ID"
        />
        <div>{/* plus icon lagana hai is dv me */}</div>
      </div>

      {/* message chat component  */}

      <div className="border-2 border-black h-full flex-col gap-7">
        <Accordion.Root type="multiple"  collapsible>
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
                <div className="box-border mt-2 cursor-pointer" key={item.id}>
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
