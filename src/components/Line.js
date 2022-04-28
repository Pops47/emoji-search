function Line({ symbol, title, keywords, search }) {
  return (
    <div className="line">
      {keywords.includes(search) ? (
        <p>
          <span>{symbol}</span> <span>{title}</span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Line;
