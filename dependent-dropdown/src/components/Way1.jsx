import React, { useState } from 'react'
function way1() {
    const [country, setCountry] = useState(0);

    const countries = [
        {
            name: "India",
            value: "IN",
            cities: ["Bangluru", "Mumbai"]
        },
        {
            name: "Bangladesh",
            value: "BAN",
            cities: ["Dhaka", "Chitaggong"]
        },
        {
            name: "Pakistan",
            value: "PAK",
            cities: ["Lahore", "Karachi"]
        }];
    return (
        <div>
            <select value={country} onChange={(e) => {
                console.log(e.target.value);
                setCountry(e.target.value);
            }}>
                {
                    countries.map((iteam, index) => {
                        return (
                            <option value={index}>{iteam.name}</option>
                        )
                    })
                }
            </select>

            <select value={country}>
                {
                    countries[country].cities.map((iteam, index) => {
                        return (
                            <option value={index}>{iteam}</option>
                        )
                    })
                }
            </select>

        </div>
    )
}

export default way1
