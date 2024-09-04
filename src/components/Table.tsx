import { useEffect, useState } from "react";
import TableDetails from "./TableDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type Language = {
    data: {
        language: string
    }[]
}

type Data = {
    name?: string,
    email?: string,
    phone?: number,
    addressOne?: string,
    addressTwo?: string,
    city?: string,
    state?: string,
    pincode?: number,
    country?: string,
    language?: string
}

function Table() {
    const navigate = useNavigate();
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        if (window.sessionStorage.getItem("id") === null) {
            navigate("/");
        }
    });

    useEffect(() => {
        const getUserEmail = async () => {
            if (data.length > 0) return;
            const jsonObject: { userid: number } = {
                userid: Number(window.sessionStorage.getItem("id")) 
            }
            const formdata = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/allforms", JSON.stringify(jsonObject), {headers:{
                "Content-Type": "application/json"
            }}) as unknown as {data: Data[]};
            const languagedata = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/alllanguage", JSON.stringify(jsonObject), {headers:{
                "Content-Type": "application/json"
            }}) as Language;
            for (let i in formdata.data) {
                setData((prev) => { 
                    return [...prev, {...formdata.data[i], ...languagedata.data[i]}];
                });
            }
        }
        getUserEmail();
    }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen dark:bg-gray-900 text-white font-bold text-xl word">
        Your forms 
        <div className="flex flex-col h-3/4 sm:w-auto w-full dark:bg-gray-800 mt-2 border border-gray-300 overflow-auto">
            {data.map((item: Data) => {
                return <TableDetails key={uuidv4()} name={item.name} email={item.email} phone={item.phone} addressOne={item.addressOne} addressTwo={item.addressTwo} city={item.city} state={item.state} pincode={item.pincode} country={item.country} language={item.language}/>
            })}
        </div>
        <input type="date" id="date" value="2000-01-01" className="mt-2 text-white rounded-md p-1 w-40 dark:bg-gray-700"/>
        <label htmlFor="date" className="underline">Enter date for specific form</label>
    </div>
  )
}

export default Table