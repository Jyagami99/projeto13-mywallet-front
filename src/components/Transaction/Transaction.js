function Transaction({ type, date, description, value }) {
  return (
    <div>
      <div>
        <p>{date}</p>
        <p>{description}</p>
      </div>
      <p>{value}</p>
    </div>
  );
}

export default Transaction;
