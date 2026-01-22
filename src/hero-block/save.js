import { useBlockProps } from "@wordpress/block-editor";
import Block from "./block";

export default function Save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<Block className="hero-block" attributes={attributes} />
		</div>
	);
}
