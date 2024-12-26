import { useState } from "react";
import "../css/Work.css";
import CompanyMaker from "./CompanyMaker";

export default function Work() {
	const [companies, setCompanies] = useState([]);
	const [currInfo, setCurrInfo] = useState({
		company: "",
		role: "",
		startDate: "",
		endDate: "",
	});
	const [makerShown, setMakerShown] = useState(true);

	function handleInputCompany(text) {
		setCurrInfo({ ...currInfo, company: text });
	}

	function handleInputRole(text) {
		setCurrInfo({ ...currInfo, role: text });
	}

	function handleInputStart(text) {
		setCurrInfo({ ...currInfo, startDate: text });
	}

	function handleInputEnd(text) {
		setCurrInfo({ ...currInfo, endDate: text });
	}

	function handleAdd() {
		setCompanies([...companies, currInfo]);
		setCurrInfo({ company: "", role: "", startDate: "", endDate: "" });
	}

	return (
		<div className="mainWork">
			<p style={{ fontWeight: "600", padding: "10px" }}>Work Experience</p>
			<div className="schoolHolder">
				{companies.map((company, index) => (
					<CompanyMaker company={company} index={index + 1} key={company.company} />
				))}
			</div>
			{makerShown && (
				<div className="companyMaker">
					<div className="companyName">
						<label htmlFor="company">Company: </label>
						<input
							type="text"
							value={currInfo.company}
							onChange={(e) => handleInputCompany(e.target.value)}
						/>
					</div>
                    <div className="role">
						<label htmlFor="role">Role: </label>
						<input
							type="text"
							value={currInfo.role}
							onChange={(e) => handleInputRole(e.target.value)}
						/>
					</div>
					<div className="workDate">
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
