import { useEffect, useState } from "react"
import TableDetails from "./TableDetails"
import axios from "axios"

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
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        const getUserEmail = async () => {
            if (data.length > 0) return;
            const jsonObject = {
                userid: Number(window.sessionStorage.getItem("id")) 
            }
            const formdata = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/allforms", JSON.stringify(jsonObject), {headers:{
                "Content-Type": "application/json"
            }});
            const languagedata = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/alllanguage", JSON.stringify(jsonObject), {headers:{
                "Content-Type": "application/json"
            }}) as Language;
            let result: Data; 
            let k = 0;
            for (let i of formdata.data as {}[]) {
                result = {...i, ...languagedata.data[k]};
                k++;
                setData((prev) => [...prev, result]);
            }
        }
        getUserEmail();
    }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen dark:bg-gray-900 text-white font-bold text-xl word">
        Your forms 
        <div className="flex flex-col h-3/4 w-3/4 dark:bg-gray-800 rounded-lg mt-2">
            {data.map((item) => {
                return <TableDetails key={Date.now()} name={item.name} email={item.email} phone={item.phone} addressOne={item.addressOne} addressTwo={item.addressTwo} city={item.city} state={item.state} pincode={item.pincode} country={item.country} language={item.language}/>
            })}
        </div>
    </div>
  )
}

export default Table