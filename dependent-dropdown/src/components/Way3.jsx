import React from 'react'
import { useState } from 'react';
function Way3() {
    const [country,setCountry]=useState(0)
    const [cstate,setState]=useState(0)
    const countries=[
        {name:"India",
        code:"IND",
        state:[{
            name:"West Bengal",
            code:"WB",
            cities:["Kolkata","Mumbai","Delhi","Banglore"]
        },{
            name:"Jharkand",
            code:"JHK",
            cities:["JHK1","JHK2"]  
        },{
            name:"Karnataka",
            code:"KNT",
            cities:["KNT1","KNT2"]  
        }]},
        {name:"Bangladesh",
        code:"BAN",
        state:[{
            name:"Ban1",
            code:"B",
            cities:["Ban11","Ban12"]
        },{
            name:"Can",
            code:"Can",
            cities:["CAN1","CAN2"]  
        },{
            name:"Dan",
            code:"Dan",
            cities:["DAN1","DAN2"]  
        }]}
    ];
    return (
        <div>
            {/*country dropdown */}
            <select onChange={(e)=>{
                console.log(e.target.value);
                setCountry(e.target.value);
            }}>{
            countries.map((iteam,index)=>{
                return <option value={index}>{iteam.name}</option>

            })}
            </select>
            {/*state dropdown*/}
            <select onChange={(e)=>{
                console.log(e.target.value);
                setState(e.target.value);
            }}>{
                countries[country].state.map((iteam,index)=>{
                    return <option value={index}>{iteam.name}</option>
                })
                }
            </select>
            {/*cities dropdown */}
            <select onChange={(e)=>{
                    console.log(e.target.value);
                }}>{
                    countries[country].state[cstate].cities.map((iteam,index)=>{
                        return <option value={index}>{iteam}</option>
                    })}
                    </select>

        </div>
        
    )
}

export default Way3
