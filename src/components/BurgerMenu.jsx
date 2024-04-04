import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    const body = document.body;
    const newOverflow = body.style.overflow === "hidden" ? "auto" : "hidden";

    body.style.overflow = newOverflow;
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <>
      <div className="md:hidden">
        <HiMenuAlt1 className="w-[25px] h-[25px]" onClick={toggleMenu} />
      </div>

      {isOpen && (
        <div className="absolute right-0 top-0 z-10 min-h-screen min-w-[30%] bg-white px-10 pb-10 pt-8">
          <CgClose
            size={22}
            onClick={toggleMenu}
            className="absolute right-10 top-9 text-fogWhite"
          />
        </div>
      )}
    </>
  );
};
