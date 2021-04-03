import React from 'react'
import {useQuery} from "react-query";

export function Logog(){
    const {status,error,data}=useQuery<Character,Error>(
        ["character",{id:1}],
        getCharacter
    );

    if(status==="loading"){
        console.log("loading")
    }
    if(status==="error"){
        console.log(error.message);
        
    }

    return data ? <h3>{data.name}</h3> : null;
}

type Character = {
    name:string;
}

type Params = {
    queryKey:[string,{id:number}];
}

function assertIsCharacter(character: any): asserts character is Character {
    if (!("name" in character)) {
      throw new Error("Not character");
    }
  }

async function getCharacter(params:Params){
    const [,{id}]=params.queryKey;
    const response=await fetch(`https://swapi.dev/api/people/${id}/`);
    if(!response.ok){
        throw new Error("Problem fetching data");
    }
    const character = await response.json();
    assertIsCharacter(character);
    console.log(character);
    return character;
}