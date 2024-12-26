import { useState } from "react";
import Avatar from "./Avatar.jsx";
import InputHandler from "./InputHandler.jsx";
import "../css/Sidebar.css";
import image from "../images/default-avatar-icon-of-social-media-user-vector.jpg";
import emailSVG from "../images/email-1-svgrepo-com.svg";
import phoneSVG from "../images/reshot-icon-phone-XVG9DMYSLJ.svg";

export default function Sidebar() {
	const [professionState, setProfessionState] = useState(false);
	const [nameState, setNameState] = useState(false);
	const [numberState, setNumberState] = useState(false);
	const [emailState, setEmailState] = useState(false);

	return (
		<div className="sidebarMain">
			<Avatar img={image} alt={"Default Profile Photo"} />
			<div className="formMain">
				<div className="formUp">
          <InputHandler
            type={"text"}
            label={"name"}
            complete={nameState}
            updaterFunction={setNameState}
            completedLogo={""}
          />
          <InputHandler
            type={"text"}
            label={"profession"}
            complete={professionState}
            updaterFunction={setProfessionState}
            completedLogo={""}
          />
        </div>
				<div className="formDown">
          <InputHandler
            type={"text"}
            label={"number"}
            complete={numberState}
            updaterFunction={setNumberState}
            completedLogo={phoneSVG}
          />
          <InputHandler
            type={"email"}
            label={"email"}
            complete={emailState}
            updaterFunction={setEmailState}
            completedLogo={emailSVG}
          />
        </div>
			</div>
		</div>
	);
}
