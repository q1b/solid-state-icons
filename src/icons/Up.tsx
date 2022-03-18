import { Accessor, ComponentProps, PropsWithChildren, Setter, Show } from "solid-js";
import { Made_a_Solid_Circle_Around_Icon, Make_a_OutlineCircle_Around_Icon, MakePlayAbleIconBtn } from "../core/utils";

type SvgOptions = PropsWithChildren<ComponentProps<"svg">>;
type SvgWithIconsOptions<P = {}> = P & {
	type?: "solid" | "outline";
};

type PlayStateWithButton<P = {}> = P & {
	state: Accessor<boolean>;
	setState: Setter<boolean>;
	colors?: [
		{
			stroke: string;
			fill: string;
		},
		{
			stroke: string;
			fill: string;
		}
	];
	width?: number;
	height?: number;
};

type IconOptions = SvgWithIconsOptions<SvgOptions>;
type ButtonOptions = PlayStateWithButton<ComponentProps<"button">>;

const UpIcon = (props: IconOptions) => {
	return (
		<Show
			when={props.type === "outline"}
			fallback={
				<Made_a_Solid_Circle_Around_Icon {...props}>
					<path
						fill-rule="evenodd"
						d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</Made_a_Solid_Circle_Around_Icon>
			}>
			<Make_a_OutlineCircle_Around_Icon {...props}>
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
			</Make_a_OutlineCircle_Around_Icon>
		</Show>
	);
};

const DownIcon = (props: IconOptions) => {
	return (
		<Show
			when={props.type === "outline"}
			fallback={
				<Made_a_Solid_Circle_Around_Icon {...props}>
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</Made_a_Solid_Circle_Around_Icon>
			}>
			<Make_a_OutlineCircle_Around_Icon {...props}>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</Make_a_OutlineCircle_Around_Icon>
		</Show>
	);
};

const PlayButton = (props: ButtonOptions) => {
	return (
		<MakePlayAbleIconBtn
			colors={[
				{
					fill: "#FF0060",
					stroke: "#FFF",
				},
				{
					fill: "#FF0060",
					stroke: "#FFF",
				},
			]}
			icons={[
				{
					hovered: UpIcon,
					unhover: UpIcon,
				},
				{
					hovered: DownIcon,
					unhover: DownIcon,
				},
			]}
			width={40}
			height={40}
			{...props}
		/>
	);
};

export default PlayButton;
