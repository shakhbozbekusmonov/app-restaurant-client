import React, {useState} from 'react';

export const Search = ({callBack = Function.prototype}) => {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter"){
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        callBack(value);
    }

    return (
        <div className="row">
           <div className="col-12 my-2">
               <input type="search"
                      className="form-control border-top-0 border-left-0 border-right-0 shadow-none rounded-0"
                      id="search"
                      placeholder="Search..."
                      onKeyDown={handleKey}
                      onChange={(e) => setValue(e.target.value)}
                      value={value}
               />
               <button type="button" className="btn btn-success rounded-0" style={{position: "absolute", top: "0", right: "0"}} onClick={handleSubmit}>Search</button>
           </div>
        </div>
    );
};