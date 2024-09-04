function TableDetails(props: {
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
}) {
  return (
    <div className="grid grid-cols-10 h-28 w-full break-all border border-neutral-900">
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">Name-<p className="font-extrabold text-ellipsis break-all text-sm">{props.name}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">Email-<p className="font-extrabold text-ellipsis break-all text-sm">{props.email}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">Phone-<p className="font-extrabold text-ellipsis break-all text-sm">{props.phone}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">AddressOne<p className="font-extrabold text-ellipsis break-all text-sm">{props.addressOne}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">AddressTwo<p className="font-extrabold text-ellipsis break-all text-sm">{props.addressTwo}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">City<p className="font-extrabold text-ellipsis break-all text-sm">{props.city}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">State-<p className="font-extrabold text-ellipsis break-all text-sm">{props.state}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">Pincode-<p className="font-extrabold text-ellipsis break-all text-sm">{props.pincode}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">Country-<p className="font-extrabold text-ellipsis break-all text-sm">{props.country}</p></div>
        <div className="dark:bg-slate-700 h-full text-nowrap text-sm text-white font-semibold flex flex-col no-scrollbar overflow-x-scroll lg:overflow-hidden p-2">Language-<p className="font-extrabold text-ellipsis break-all text-sm">{props.language}</p></div>
    </div>
  )
}

export default TableDetails