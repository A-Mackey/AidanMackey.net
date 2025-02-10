import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, Stars } from "@react-three/drei";
import { useEffect } from "react";

var percent = 0;
const percentMax = 7.5;

const Rotate = () => {
	const { camera } = useThree();
	useFrame(() => {
		// camera.rotation.x += 0.000175;
		// camera.rotation.y += 0.000175;
		// camera.rotation.z += 0.000175;
		// camera.position.x += 1;
		// camera.position.y -= 1;
		camera.position.y = percent * -20;
		camera.position.z = percent * 20;
	});
	return (
		<mesh>
			<boxGeometry args={[0, 0, 0]} />
		</mesh>
	);
};

export default function Space() {
	function getVerticalScrollPercentage(elm) {
		var p = elm.parentNode;
		return (
			((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
		);
	}

	useEffect(() => {
		function resetCanvas() {
			var canvas = document.getElementById("canvasID");

			canvas.style.minHeight = "100vh";
			canvas.style.minWidth = "calc(100vw - 7px)";
			canvas.style.position = "fixed";
			canvas.style.zIndex = "0";
			canvas.style.pointerEvents = "none";
			// canvas.style.backgroundImage = "linear-gradient(#040825, #060c37)";
			canvas.style.backgroundColor = "transparent";
		}

		window.addEventListener("resize", resetCanvas);
		resetCanvas();

		document.onscroll = function () {
			var pos = getVerticalScrollPercentage(document.body);
			percent = pos;

			document.getElementById("canvasID").style.filter = `blur(${
				percent > percentMax ? percentMax : percent / 2
			}px)`;
		};
	});
	return (
		<Canvas id="canvasID">
			<ambientLight />

			<PerspectiveCamera position={[0, 0, 0]} rotation={[0, 0, 0]}>
				<Stars saturation={0} />
				<Rotate />
			</PerspectiveCamera>
		</Canvas>
	);
}
