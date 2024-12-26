// import { useState } from "react";
import "../css/Avatar.css";

export default function Avatar({ img, alt }) {
	return (
		<div className="avatarMain">
			<img src={img} alt={alt} className="avatarImg" />
		</div>
	);
}
