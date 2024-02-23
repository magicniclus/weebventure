import { Button } from "./ui/button";

const Nav = () => {
  return (
    <header className="max-w-5xl mx-auto py-4 px-2 flex justify-between">
      <a href="/">
        <img src="/logos/logo.png" alt="Logo" className="h-[30px] w-[110px]" />
      </a>
      <div>
        <Button variant="perso">Nous contacter</Button>
      </div>
    </header>
  );
};

export default Nav;
