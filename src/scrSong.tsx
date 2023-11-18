import './styles.scss';

interface SongProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Song = (props: SongProps) => {
  return (
    <div className="container">
      <div className="CancBox">
        <div className="imageContainer">
          <img src={props.imageUrl} />
          <div className="tituloDescrip">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>Reproducir</button>
            <button>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Song;
