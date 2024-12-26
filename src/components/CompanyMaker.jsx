import "../css/CompanyMaker.css";

export default function CompanyMaker({ company, index }) {
	return (
		<div className="company">
			<h3>{index + ") Worked As " + company.role + " at " + company.company}</h3>
			<p>&nbsp;&nbsp;&nbsp;{company.startDate + " until " + company.endDate}</p>
		</div>
	);
}
