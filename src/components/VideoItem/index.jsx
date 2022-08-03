import './styles.scss';
import React from 'react';

const VideoItem = (props) => {
	const { video } = props
	return (
		<div>
			<div className="items-container">
				<div className="video-thumbnail">
					<img src={video.thumb} alt="" />
				</div>
				<div className="info-container">
					<div>
						<div className="title">
							{video.title}
						</div>
						<div className="statistics">
							15 K vistas - hace 18 horas
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default VideoItem;
