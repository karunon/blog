export const layout = "_includes/layouts/main.tsx";

export const title = "Hello";

export default (data: Lume.Data) => {
  return (
    <>
      <main className="m-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p>My name is Karunon. I'm a Designer, not a Programmer.</p>
      </main>
    </>
  );
};
