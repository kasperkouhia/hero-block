import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	PanelRow,
	Placeholder,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import Block from "./block";

export default function Edit({ attributes, setAttributes }) {
	const {
		foregroundImageId,
		foregroundImageUrl,
		backgroundImageId,
		backgroundImageUrl,
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Foreground Image", "hero-block")}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(image) =>
									setAttributes({
										foregroundImageId: image.id,
										foregroundImageUrl: image.url,
										foregroundImageAlt: image.alt,
									})
								}
								allowedTypes={["image"]}
								value={foregroundImageId}
								render={({ open }) => (
									<Button
										onClick={open}
										variant={foregroundImageUrl ? "secondary" : "primary"}
									>
										{foregroundImageUrl
											? __("Change Foreground Image", "hero-block")
											: __("Select Foreground Image", "hero-block")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Background Image", "hero-block")}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(image) =>
									setAttributes({
										backgroundImageId: image.id,
										backgroundImageUrl: image.url,
										backgroundImageAlt: image.alt,
									})
								}
								allowedTypes={["image"]}
								value={backgroundImageId}
								render={({ open }) => (
									<Button
										onClick={open}
										variant={backgroundImageUrl ? "secondary" : "primary"}
									>
										{backgroundImageUrl
											? __("Change Background Image", "hero-block")
											: __("Select Background Image", "hero-block")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			{foregroundImageUrl && backgroundImageUrl ? (
				<Block className="hero-block-preview" attributes={attributes} />
			) : (
				<Placeholder
					label={__("Hero Block", "hero-block")}
					className="hero-block-placeholder"
				>
					{!foregroundImageUrl && (
						<p className="hero-block-notice">
							&#9888; {__("No foreground image selected.", "hero-block")}
						</p>
					)}
					{!backgroundImageUrl && (
						<p className="hero-block-notice">
							&#9888; {__("No background image selected.", "hero-block")}
						</p>
					)}
				</Placeholder>
			)}
		</div>
	);
}
