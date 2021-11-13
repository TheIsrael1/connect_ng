import React from "react";
import styles from './searchbox.module.css'

export default function Searchbox(props) {
  return (
    <div className={`h-16 flex justify-center mx-auto my-10 w-1/2 bg-gray-300`}>
      <select
        className={`text-xl w-auto text-center outline-none cursor-pointer ${styles.select}`}
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
