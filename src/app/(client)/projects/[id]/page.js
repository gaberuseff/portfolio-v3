async function page({ params }) {
  const { id } = await params;

  console.log("🚀 ~ page ~ id:", id);

  return <div>{id}</div>;
}

export default page;
