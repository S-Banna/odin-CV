import { useState } from "react";
import "../css/School.css";
import SchoolMaker from "./SchoolMaker";

export default function School() {
	const [schools, setSchools] = useState([]);
	const [currInfo, setCurrInfo] = useState({
		name: "",
		startDate: "",
		endDate: "",
	});
	const [makerShown, setMakerShown] = useState(true);

	function handleInputName(text) {
		setCurrInfo({ ...currInfo, name: text });
	}

	function handleInputStart(text) {
		setCurrInfo({ ...currInfo, startDate: text });
	}

	function handleInputEnd(text) {
		setCurrInfo({ ...currInfo, endDate: text });
	}

	function handleAdd() {
		setSchools([...schools, currInfo]);
		setCurrInfo({ name: "", startDate: "", endDate: "" });
	}

	return (
		<div className="mainSchool">
			<p style={{ fontWeight: "600", padding: "10px" }}>Education</p>
			<div className="schoolHolder">
				{schools.map((school, index) => (
					<SchoolMaker school={school} index={index + 1} key={school.name} />
				))}
			</div>
			{makerShown && (
				<div className="schoolMaker">
					<div className="schoolName">
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							value={currInfo.name}
							onChange={(e) => handleInputName(e.target.value)}
						/>
					</div>
					<div className="schoolDate">
						<label htmlFor="name">Date: </label>
						<input
							type="text"
							value={currInfo.startDate}
							onChange={(e) => handleInputStart(e.target.value)}
						/>
						<label htmlFor="name">until </label>
						<input
							type="text"
							value={currInfo.endDate}
							onChange={(e) => handleInputEnd(e.target.value)}
						/>
					</div>
					<div className="buttonCont">
						<button className="buttonSubmit" onClick={() => handleAdd()}>
							Submit
						</button>
						<button onClick={() => setMakerShown(false)}>Hide</button>
					</div>
				</div>
			)}
		</div>
	);
}
