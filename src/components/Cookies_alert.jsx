import { useEffect, useState } from "react";
export function Cookies_Alert() {





    const Cookies_Confirm = () => {
        document.cookie = "cookies_enabled=true; max-age=60*60*24*365";
        document.querySelector("[id='cookies_alert']").classList.add("hidden");
    }

    const Cookies_reject = () => {
        document.cookie = "cookies_enabled=false; max-age=60*60*24*365";
        document.querySelector("[id='cookies_alert']").classList.add("hidden");
    }

    useEffect(() => {




        if (!navigator.cookieEnabled) {
            // Si las cookies están deshabilitadas, mostrar un mensaje al usuario y solicitar su permiso
            document.querySelector("[id='cookies_alert']").classList.remove("hidden");
        }
    }, []);


    return (
        <><div id='cookies_alert' className="alert shadow-lg fixed hidden bottom-0 ">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Nos Autorizas Utilizar las Cookies?</span>
            </div>
            <div className="flex-none">
                <button onClick={Cookies_Confirm()} className="btn btn-sm btn-ghost">Rechazar</button>
                <button onCanPlay={Cookies_reject()} className="btn btn-sm btn-primary">Aceptar</button>
            </div>
        </div>
        </>);
}