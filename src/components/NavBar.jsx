import { Link } from "react-router-dom";
export default function NavBar() {

  return (<>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <div className="form-control [ lg:visible ] [ md:visible ] [ hidden  ] ">
          <input id="Buscador" type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>

          <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
            <div className="w-10 rounded-full">
              <img src="https://unavatar.io/unknown" />
            </div>
          </label>
        </ul>
      </div>
    </div>
  </>

  )
}