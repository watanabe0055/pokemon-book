import { SvgProps } from "./bug";

const WaterSVG: React.FC<SvgProps> = ({ size }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<svg
				width="512"
				height="512"
				viewBox="0 0 512 512"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M422.172 346.515C422.172 437.897 347.813 511.977 256.086 511.977C164.359 511.977 90 437.897 90 346.515C90 257.639 247.102 13.5479 255.718 0.22781C255.915 -0.0759384 256.258 -0.0759358 256.454 0.227813C265.07 13.5479 422.172 257.639 422.172 346.515ZM228.4 458.931C144.12 440.49 158.542 347.13 158.542 347.13C158.542 347.13 181.556 403.488 237.405 421.744C293.253 439.999 360.745 413.225 360.745 413.225C360.745 413.225 312.68 477.371 228.4 458.931Z"
					fill="#2563EB"
				/>
			</svg>
		</svg>
	);
};

export default WaterSVG;
