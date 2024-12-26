import { useState } from "react";
import "../css/InputHandler.css";

function SVGCheck({logo}) {
    return logo === "" ? <></> :  <img src={logo} alt="" />;
}

export default function InputHandler({
	type,
	label,
	complete,
	updaterFunction,
    completedLogo
}) {
	const [input, setInput] = useState("");
	function handleInput(text) {
		setInput(text);
	}

	if (complete === true) {
		return (
			<div className="flexBaseStart">
                <SVGCheck logo={completedLogo} />
				<p className={label}>{input}</p>
			</div>
		);
	} else {
		return (
			<div className={"flexBase"}>
				<label htmlFor={label}>
					{label.charAt(0).toUpperCase() + label.slice(1) + ": "}
				</label>
				<input
					type={type}
					name={label}
					id={label}
					onChange={(e) => handleInput(e.target.value)}
					value={input}
				/>
				<button className="buttonSubmit" onClick={() => updaterFunction(true)}>
					Submit
				</button>
			</div>
		);
	}
}
