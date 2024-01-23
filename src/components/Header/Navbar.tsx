const Navbar = () => {
  const items: { name: string }[] = [
    { name: "Home" },
    { name: "Questions" },
    { name: "Marks" },
    { name: "Contact" },
  ];

  return (
    <div className="h-12 border-b flex items-center  space-x-5 px-5">
      <h1>Logo</h1>
      <ul className="flex items-center space-x-5 font-medium">
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
