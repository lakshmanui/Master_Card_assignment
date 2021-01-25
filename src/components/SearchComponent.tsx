import * as React from 'react';
import './SearchComponent.css';
import glass from '../images/glass.svg';

export interface Props{
  onChange:(e:any)=>void;
  search:()=>void;
  value: string;
}

export default (props: Props) => {

 
  const name = "Lakshman Kumar's";
  return (
    <div className={props.value.length>0?"home-with-text":"home"}>
      <h1 className="home-logo">{name} github </h1> <h1 className="home-logo-2">Search</h1>
      <input onChange={e => props.onChange(e.target.value)}  autoFocus={true} value={props.value}/>
      <img onClick={props.search} className="glass" alt="magnifying glass" src={glass} />
    </div>
  );
};
