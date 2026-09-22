"use client";
import { useUi } from "@/context/UiContext";

export default function SearchPopup() {
  const { searchOpen, closeSearch } = useUi();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      closeSearch();
    }
  };

  return (
    <div
      className={`search-popup ${searchOpen ? "active" : ""}`}
      data-popup={1}
      onClick={handleBackdropClick}
    >
      <div className="search-popup-content">
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <i className="fa fa-search" />
          </button>
          <input type="text" placeholder="Type Your Search..." required />
        </form>
        <button type="button" className="close-popup" onClick={closeSearch} />
      </div>
    </div>
  );
}
