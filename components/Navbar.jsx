import darkmode from "@/state/atom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Switch,
} from "@nextui-org/react";
import { useAtom } from "jotai";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const Nav = ({ fth, func }) => {
  const [mode, setMode] = useAtom(darkmode);
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div>
      <Navbar isBordered>
        <NavbarBrand>
          <p className="font-bold text-inherit">Random User Generator</p>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Switch
              isSelected={mode}
              size="lg"
              color="primary"
              startContent={<Sun />}
              endContent={<Moon />}
              onChange={(e) => {
                setMode(e.target.checked);
              }}
            ></Switch>
          </NavbarItem>
          <NavbarItem>
            <Button isLoading={fth} color="primary" href="#" onPress={func}>
              {`${!fth ? "Fetch User" : ""}`}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Nav;
