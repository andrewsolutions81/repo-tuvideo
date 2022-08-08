import './styles.scss';
import { useAppContext } from '../../store';

function Banner() {
  const { channel } = useAppContext();
  return (
    <div className="banner-visible-area" style={{ backgroundImage: `url(${channel.snippet.banner})` }}>
      <div className="banner-editor" />
    </div>
  );
}
export default Banner;
