export default () => {
  return (
    <>
      <header className="grid m-4 gap-2">
        <p className="text-2xl font-bold">Karunon's blog</p>
        <p className="text-gray-600">Designer</p>
        <nav>
          <ul className="flex w-fit gap-4 rounded-full border border-gray-700 px-4 py-2">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
