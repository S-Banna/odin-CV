import html2canvas from "html2canvas";

export default function Exporter() {
	const exportAsPNG = () => {
		const element = document.body;
		html2canvas(element, { useCORS: true })
			.then((canvas) => {
				const link = document.createElement("a");
				link.download = "exported-page.png";
				link.href = canvas.toDataURL("image/png");
				link.click();
			})
			.catch((error) => console.error("Export failed:", error));
	};

	return (
		<div
			style={{
				position: "absolute",
				bottom: "35px",
				right: "35px",
				width: "30px",
				height: "30px",
			}}
		>
			<button onClick={() => exportAsPNG()}>Export as PNG</button>
		</div>
	);
}
