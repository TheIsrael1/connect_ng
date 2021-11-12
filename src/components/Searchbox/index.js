import React from "react";

export default function Searchbox(props) {
  return (
    <div className={`h-16 flex justify-center w-full bg-gray-300`}>
      <select
        className={`bg-yellow-300 text-xl w-28 text-center outline-none cursor-pointer`}
      >
        <option>All</option>
        <option>another option</option>
      </select>
      <input
        type='text'
        placeholder='search services...'
        className={`bg-transparent w-full px-4 outline-none`}
        onChange={props.searchitem}
      />
    </div>
  );
}
