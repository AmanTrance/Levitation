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
    name: string,
    email: string,
    phone: number,
    addressOne: string,
    addressTwo: string,
    city: string,
    state: string,
    pincode: number,
    country: string,
    language?: string
}

function Table() {
    const navigate = useNavigate();
    const [data, setData] = useState<Data[]>([]);
    const [date, setDate] = useState<string>("");

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

    const handleDate = async (e: any) => {
        setDate(e.target.value);
        const jsonObject: { userid: number, date: string } = {
            userid: Number(window.sessionStorage.getItem("id")),
            date: e.target.value
        }
        setData([]);
        const formdata = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/specificform", JSON.stringify(jsonObject), {headers:{
            "Content-Type": "application/json"
        }}) as unknown as {data: Data[]};
        const languagedata = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/specificlang", JSON.stringify(jsonObject), {headers:{
            "Content-Type": "application/json"
        }}) as Language;
        for (let i in formdata.data) {
            setData((prev) => { 
                return [...prev, {...formdata.data[i], ...languagedata.data[i]}];
            });
        }
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen dark:bg-gray-900 text-white font-bold text-4xl word">
        Your forms 
        <div className="h-3/4 sm:w-full w-full dark:bg-gray-800 mt-2 border border-gray-300 overflow-y-scroll no-scrollbar">
            {data.map((item: Data) => {
                return <TableDetails key={uuidv4()} name={item.name} email={item.email} phone={item.phone} addressOne={item.addressOne} addressTwo={item.addressTwo} city={item.city} state={item.state} pincode={item.pincode} country={item.country} language={item.language}/>
            })}
        </div>
        <input type="date" id="date" value={date} className="mt-2 text-white text-xl rounded-md p-1 w-40 dark:bg-gray-700" onChange={handleDate}/>
        <label htmlFor="date" className="underline text-xl">Enter date for specific form</label>
    </div>
  )
}

export default Table