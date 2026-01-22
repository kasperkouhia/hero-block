export default function Block({ attributes, ...rest }) {
	const {
		foregroundImageUrl,
		foregroundImageAlt,
		backgroundImageUrl,
		backgroundImageAlt,
	} = attributes;

	return (
		<div {...rest}>
			<div className="hero-block-foreground">
				<img src={foregroundImageUrl} alt={foregroundImageAlt} />
			</div>
			<div className="hero-block-background">
				<img src={backgroundImageUrl} alt={backgroundImageAlt} />
			</div>
		</div>
	);
}
