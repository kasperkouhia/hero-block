import { useBlockProps } from "@wordpress/block-editor";
import Block from "./block";

export default function Save({ attributes }) {
	const blockProps = useBlockProps.save({ className: "hero-block" });

	return <Block attributes={attributes} {...blockProps} />;
}
