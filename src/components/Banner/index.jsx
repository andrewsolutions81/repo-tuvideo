import './styles.scss';

function Banner(props) {
  const { channel } = props;
  return (
    <div className="banner-visible-area" style={{ backgroundImage: `url(${channel.snippet.banner})` }}>
      <div className="banner-editor" />
    </div>
  );
}
export default Banner;
