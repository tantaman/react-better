/** @jsx h */
import h from 'virtual-dom/h';

export var Comp = {
	render(count) {
		return (
			<div style={{
					width: (100 + count) + 'px',
					height: (100 + count) + 'px',
					border: '1px solid red'
				}}>
				Yo
			</div>
		);
	}
};
