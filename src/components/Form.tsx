import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Language = {
  language: string,
  userid: number,
  date: string
}

function Form() {
  const navigate = useNavigate();
  const [initial, setInitial] = useState<boolean>(true);
  const [final, setFinal] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [lang, setLang] = useState<string>("Choose");

  useEffect(() => {
   if (window.sessionStorage.getItem("id") === null) {
    navigate("/");
   } 
  });

  const handleCancel = async (e :any) => {
    e.preventDefault();
    if (final === true) {
      const LangDetails: Language = {
        language: "...",
        userid: Number(window.sessionStorage.getItem("id")),
        date: `${new Date().getFullYear()}`+ `${new Date().getMonth() + 1 < 10 ? "-0" : "-"}` + `${new Date().getMonth() + 1}` + `${new Date().getDate() < 10 ? "-0" : "-"}` + `${new Date().getDate()}`
      }
      await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/language", JSON.stringify(LangDetails), {headers:{
        "Content-Type": "application/json"
      }});
      navigate("/table");
    } else {
      navigate("/table");
    }
  }

  const handleNext = async (e: any) => {
    if (initial === true) {
      e.preventDefault();
      const form: HTMLFormElement = document.getElementById("form1") as HTMLFormElement;
      const formData: FormData = new FormData(form);
      let formDetails = Object.fromEntries(formData);
      formDetails["userid"] = window.sessionStorage.getItem("id") as FormDataEntryValue;
      formDetails["date"] = `${new Date().getFullYear()}`+ `${new Date().getMonth() + 1 < 10 ? "-0" : "-"}` + `${new Date().getMonth() + 1}` + `${new Date().getDate() < 10 ? "-0" : "-"}` + `${new Date().getDate()}`;
      await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/form", JSON.stringify(formDetails), {headers:{
        "Content-Type": "application/json"
      }});
      setInitial(false);
      setFinal(true);
    } 
  }

  const handlePrevious = (e: any) => {
    e.preventDefault();
    if (final === true) {
      setFinal(false);
      setInitial(true);
    }
  }

  const handleDropDown = () => {
    if (dropDown === false) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const SubmitDetails: Language = {
      language: lang !== "Choose" ? lang : "...",
      userid: Number(window.sessionStorage.getItem("id")),
      date: `${new Date().getFullYear()}`+ `${new Date().getMonth() + 1 < 10 ? "-0" : "-"}` + `${new Date().getMonth() + 1}` + `${new Date().getDate() < 10 ? "-0" : "-"}` + `${new Date().getDate()}`
    }
    const response = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:f9GQ_ICr/language", JSON.stringify(SubmitDetails), {headers:{
      "Content-Type": "application/json"
    }});
    if (response.status === 200) {
      navigate("/table");
    }
  }

  const handleClick = (e: any) => {
    const value: string = e.target.innerText;
    setLang(value);
    setDropDown(false);
  }

  return (
    <div className="flex justify-center 2xl:items-center h-full w-full dark:bg-gray-900 overflow-y-scroll no-scrollbar">
      {initial && <form id="form1" className="flex flex-col justify-center items-center h-130 w-full dark:bg-gray-900" onSubmit={handleNext}>
        <span className="text-white font-semibold text-xl mb-2 underline font-mono">Fill the form</span>
        <div className="grid rounded-lg grid-rows-10 dark:border h-5/6 xl:w-1/3 md:w-1/2 w-5/6 dark:bg-gray-800">
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="name" className="text-white ml-1 text-sm w-full font-semibold">Name</label>
              <input id="name" name="name" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="email" className="text-white ml-1 text-sm w-full font-semibold">Email</label>
              <input id="email" type="email" pattern="^[a-z\.0-9]+@[a-z0-9]+\[a-z]{2,}$" name="email" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="phone" className="text-white ml-1 text-sm w-full font-semibold">Phone</label>
              <input id="phone" type="number" name="phone" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="address-one" className="text-white ml-1 text-sm w-full font-semibold">Address Line One</label>
              <input id="address-one" name="addressOne" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="address-two" className="text-white ml-1 text-sm w-full font-semibold">Address Line Two</label>
              <input id="address-two" name="addressTwo" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="city" className="text-white ml-1 text-sm w-full font-semibold">City</label>
              <input id="city" name="city" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="state" className="text-white ml-1 text-sm w-full font-semibold">State</label>
              <input id="state" name="state" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="pincode" className="text-white ml-1 text-sm w-full font-semibold">Pincode</label>
              <input id="pincode" type="number" name="pincode" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex flex-col justify-center p-2.5">
              <label htmlFor="country" className="text-white ml-1 text-sm w-full font-semibold">Country</label>
              <input id="country" name="country" className="bg-gray-50 border h-5/6 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="flex justify-evenly items-center">
              <button className="dark:bg-red-500 w-1/4 h-2/4 rounded-md text-white font-bold hover:bg-red-600 transition-all duration-500 ease-in cursor-pointer" onClick={handleCancel}>Cancel</button>
              <input className="dark:bg-blue-500 w-1/4 h-2/4 rounded-md text-white font-bold hover:bg-blue-600 transition-all duration-500 ease-in cursor-pointer" type="submit" value="Next"/>
            </div>
        </div>
      </form>}
      {final && <form id="form3" className="flex flex-col justify-center items-center h-full w-full dark:bg-gray-900" onSubmit={handleSubmit}>
          <div className="flex flex-col rounded-lg dark:border h-56 lg:h-72 w-5/6 md:w-4/6 xl:w-1/3 dark:bg-gray-800">
            <div className="flex flex-col justify-center items-center h-2/4 font-bold text-white">
              Choose your favourite language
              <div id="lang" className="flex justify-center items-center relative mt-4 dark:bg-purple-500 h-10 w-2/4 text-white rounded-lg">
              {lang}{dropDown ? <i className="fa-solid cursor-pointer ml-1 mt-1 p-3 fa-chevron-up text-white font-bold w-5" onClick={handleDropDown}></i> : <i className="fa-solid cursor-pointer ml-1 p-3 fa-chevron-down text-white font-bold w-5" onClick={handleDropDown}></i>}
                {dropDown && <div className="grid grid-rows-5 h-64 w-full absolute mt-80 transition-all duration-500 ease-in"><button className="flex justify-center items-center bg-gray-700 cursor-pointer border border-black hover:bg-slate-800 transition-all duration-500 ease-in text-white rounded-t-lg" onClick={handleClick}>Rust</button>
                <button className="flex justify-center items-center bg-gray-700 cursor-pointer border border-black hover:bg-slate-800 transition-all duration-500 ease-in text-white" onClick={handleClick}>Golang</button><button className="flex justify-center items-center bg-gray-700 cursor-pointer border border-black hover:bg-slate-800 transition-all duration-500 ease-in text-white" onClick={handleClick}>TypeScript</button><button className="flex justify-center items-center bg-gray-700 cursor-pointer border border-black hover:bg-slate-800 transition-all duration-500 ease-in text-white" onClick={handleClick}>C++</button>
                <button className="flex justify-center items-center bg-gray-700 cursor-pointer border border-black hover:bg-slate-800 transition-all duration-500 ease-in text-white rounded-b-lg" onClick={handleClick}>Python</button>
                </div>}
              </div>
            </div>
            <div className="flex justify-evenly items-center h-28">
              <button className="dark:bg-red-500 w-1/4 h-2/4 rounded-md font-bold hover:bg-red-600 text-white transition-all duration-500 ease-in" onClick={handleCancel}>Cancel</button>
              <button className="dark:bg-green-500 w-1/4 h-2/4 rounded-md font-bold hover:bg-green-600 text-white transition-all duration-500 ease-in" onClick={handlePrevious}>Previous</button>
              <button className="dark:bg-blue-500 w-1/4 h-2/4 rounded-md font-bold hover:bg-blue-600 text-white transition-all duration-500 ease-in">Submit</button>
            </div>
          </div>
        </form>}
    </div>
  )
}

export default Form