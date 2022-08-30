/* eslint-disable react/jsx-no-useless-fragment */
import './styles.scss';
import { useEffect, useState } from 'react';
import { useChannel } from '../../channelContext';

function Banner() {
  const {
    user, modEdit, style, tempBanner, setTempBanner,
  } = useChannel();
  const [previewBanner, setPreviewBanner] = useState('');

  useEffect(() => {
    setPreviewBanner(tempBanner);
  }, [tempBanner]);

  return (
    <>
      {
        modEdit ? (
          tempBanner
          && (
            <div>
              <div className="banner-visible-area" style={{ backgroundImage: `url(${previewBanner || URL.createObjectURL(tempBanner)})`, border: style.border }}>
                <div className="banner-editor" />
                <div className="input-file">
                  <input
                    type="file"
                    className="input-upload-image"
                    onChange={(e) => {
                      setTempBanner(e.target.files[0]);
                      setPreviewBanner(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="camera-icon">
                    <g className="style-scope yt-icon">
                      <path d="M12,10c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,10,12,10 M12,9c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,9,12,9L12,9z M14.59,5l1.71,1.71L16.59,7H17h4v12H3V7h4h0.41l0.29-0.29L9.41,5H14.59 M15,4H9L7,6H2v14h20V6h-5L15,4L15,4z" className="style-scope yt-icon" stroke="white" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          )
        ) : (
          user?.banner
          && (
            <div>
              <div className="banner-visible-area" style={{ backgroundImage: `url(${user.banner})`, border: style.border }}>
                <div className="banner-editor" />
              </div>
            </div>
          )
        )
      }
    </>
  );
}
export default Banner;
