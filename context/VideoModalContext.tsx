"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type VideoModalContextType = {
  openModal: (videoUrl: string) => void;
  closeModal: () => void;
};

const VideoModalContext = createContext<VideoModalContextType | null>(null);

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) {
    return {
      openModal: () => {},
      closeModal: () => {},
    };
  }
  return context;
}

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const openModal = useCallback((url: string) => {
    setVideoUrl(url);
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    // Match HTML config: remove show first, then after 300ms hide and clear src
    setTimeout(() => {
      if (iframeRef.current) iframeRef.current.src = "";
      setIsOpen(false);
      setVideoUrl("");
    }, 300);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  const showClass = isOpen && !isClosing ? " show" : "";
  // When open, use display:flex so that when we remove "show" for close animation, opacity can transition
  const modalStyle = isOpen ? { display: "flex" as const } : undefined;

  return (
    <VideoModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div
          className={`video-modal${showClass}`}
          style={modalStyle}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Video modal"
        >
          <div className="video-modal-content">
            <button
              type="button"
              className="close-btn"
              onClick={closeModal}
              aria-label="Close video"
            >
              ×
            </button>
            <iframe
              ref={iframeRef}
              src={videoUrl ? `${videoUrl}?autoplay=1` : ""}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video"
            />
          </div>
        </div>
      )}
    </VideoModalContext.Provider>
  );
}
