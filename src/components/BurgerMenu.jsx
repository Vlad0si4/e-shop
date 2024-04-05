import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { NavLinks } from "./NavLinks";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(true);

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  const toggleMenu = () => {
    const body = document.body;
    const newOverflow = body.style.overflow === "hidden" ? "auto" : "hidden";

    body.style.overflow = newOverflow;
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="md:hidden ">
        <HiMenuAlt1 size={30} onClick={toggleMenu} />
      </div>

      {isOpen && (
        <div className="fixed right-0 top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.53)] flex ">
          <div className="absolute top-0 right-0 w-[30%] h-[100%] bg-white flex items-center justify-center flex-col py-[22px]">
            <CgClose
              size={22}
              onClick={toggleMenu}
              className="absolute top-10 right-9"
            />
            <div className="flex flex-col">
              <NavLinks isInMenu={true} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
