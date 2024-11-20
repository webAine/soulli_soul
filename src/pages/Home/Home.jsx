import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div>
      <button onClick={() => navigate('/gallery/twitch_panels')}>Twitch Panels</button>
      <button onClick={() => navigate('/gallery/vtuber_models')}>Vtuber Models</button>
      <button onClick={() => navigate('/gallery/twitch_emotes')}>Twitch Emotes</button>
      <button onClick={() => navigate('/gallery/png_tuber')}>PNG Tuber</button>
      </div>
    </div>
  );
};

export default Home;
