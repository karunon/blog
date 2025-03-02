import Header from "../../components/Header.tsx";

export default (
  { children }: Lume.Data,
) => {
  return (
    <>
      <html lang="ja">
        <head>
          <link rel="stylesheet" href="/style.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body className="text-gray-900 font-normal">
          <Header />
          {children}
        </body>
      </html>
    </>
  );
};
