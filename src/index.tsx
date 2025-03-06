export const layout = "_includes/layouts/main.tsx";

export const title = "Hello,";

export default (data: Lume.Data) => {
  return (
    <>
      <main className="m-4 grid gap-4">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p>
          My name is Karunon. I'm a designer that live in Japan, not a
          programmer. I don't have any works yet because I've only just entered
          this industry. My dream is to fill this site in the future.
        </p>
        <p>
          Design is incredibly challenging. On weekdays, my mind always feels
          like it's about to explode. Recently, I've been slowly learning about
          UX and a11y (accessibility)—progressing at the pace of a snail.
        </p>
        <p>
          Programming is like therapy. Even for someone who constantly makes
          mistakes, the compiler always shows the right path.
        </p>
      </main>
    </>
  );
};
