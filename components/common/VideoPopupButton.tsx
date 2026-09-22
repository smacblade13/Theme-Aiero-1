"use client";

import { type ReactNode } from "react";
import { useVideoModal } from "@/context/VideoModalContext";

type VideoPopupButtonProps = {
  videoUrl: string;
  children: ReactNode;
  className?: string;
  href?: string;
};

export default function VideoPopupButton({
  videoUrl,
  children,
  className = "video-popup",
  href = "#",
}: VideoPopupButtonProps) {
  const { openModal } = useVideoModal();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        openModal(videoUrl);
      }}
    >
      {children}
    </a>
  );
}
