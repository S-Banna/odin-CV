import "../css/SchoolMaker.css";

export default function SchoolMaker({school, index}) {
    return (
        <div className="school">
            <h3>{index + ") " + school.name}</h3>
            <p>&nbsp;&nbsp;&nbsp;{school.startDate + " until " + school.endDate}</p>
        </div>
    )
}