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

// type PlayStateWithButton<P = {}> = P & {
// 	state: Accessor<boolean>;
// 	setState: Setter<boolean>;
// };

type IconOptions = SvgWithIconsOptions<SvgOptions>;
type ButtonOptions = PlayStateWithButton<ComponentProps<"button">>;

const MenuIcon = (props: IconOptions) => {
	return (
		<Show
			when={props.type === "outline"}
			fallback={
				<Made_a_Solid_Circle_Around_Icon {...props}>
					<path
						fill-rule="evenodd"
						d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</Made_a_Solid_Circle_Around_Icon>
			}>
			<Make_a_OutlineCircle_Around_Icon {...props}>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
			</Make_a_OutlineCircle_Around_Icon>
		</Show>
	);
};

const CloseIcon = (props: IconOptions) => {
	return (
		<Show
			when={props.type === "outline"}
			fallback={
				<Made_a_Solid_Circle_Around_Icon {...props}>
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</Made_a_Solid_Circle_Around_Icon>
			}>
			<Make_a_OutlineCircle_Around_Icon {...props}>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
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
					hovered: MenuIcon,
					unhover: MenuIcon,
				},
				{
					hovered: CloseIcon,
					unhover: CloseIcon,
				},
			]}
			width={40}
			height={40}
			{...props}
		/>
	);
};

export default PlayButton;
