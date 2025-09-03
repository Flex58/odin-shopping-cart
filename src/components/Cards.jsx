function Cards({props}) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.price}</div>
      <hr />
    </div>
  );
}

export default Cards