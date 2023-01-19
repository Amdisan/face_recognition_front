import "./rank.styles.css";

const Rank = ({ appState }) => {
  return (
    <div className="Ra_container">
      <div className="Ra_container_name">{`${appState.user.name} your current rank is`}</div>
      <div className="Ra_container_number">{`${appState.user.entries}`}</div>
    </div>
  );
};

export default Rank;
