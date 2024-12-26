// import { useState } from "react";
import "../css/Avatar.css";

function Avatar({ img, alt }) {
	return (
		<div className="avatarMain">
			<img src={img} alt={alt} className="avatarImg" />
		</div>
	);
}

export { Avatar };
