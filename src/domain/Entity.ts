export default abstract class Entity<Props> {
	public props: Props;

	public constructor(props: Props) {
		this.props = props;
	}
}
