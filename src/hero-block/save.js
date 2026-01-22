import { useBlockProps } from "@wordpress/block-editor";
import Block from "./block";

export default function Save({ attributes }) {
	const { foregroundImageUrl, backgroundImageUrl } = attributes;

	if (!(foregroundImageUrl && backgroundImageUrl)) return;

	return (
		<div {...useBlockProps.save()}>
			<Block className="hero-block" attributes={attributes} />
		</div>
	);
}
