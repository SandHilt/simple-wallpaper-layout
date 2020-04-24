import React, { useRef, MouseEvent, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
import dialogPollyfill from "dialog-polyfill";
import "./style.css";

const Card: React.FC<CardProps> = ({
  big: { width: bigW, height: bigH },
  thumb: { width: thW, height: thH },
  url: { origin, search },
}) => {
  const text = new LoremIpsum().generateWords(3);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const toogleModal = (e: MouseEvent) => {
    e.preventDefault();
    const { current: dialog } = dialogRef;

    if (dialog) {
      if (dialog.open) {
        dialog.close();
      } else {
        dialog.showModal();
      }
    }
  };

  useEffect(() => {
    if (dialogRef) {
      const { current: dialog } = dialogRef;
      if (dialog) {
        dialogPollyfill.registerDialog(dialog);
      }
    }
  }, [dialogRef]);

  return (
    <figure className="Card">
      <a href="#modal" className="content" onClick={toogleModal}>
        <img
          className="animated fadeIn"
          loading="lazy"
          width={thW}
          height={thH}
          src={`${origin}/${thW}/${thH}${search}`}
          alt="This is a cat in thumb."
        />
        <figcaption className="text">{text}</figcaption>
      </a>
      <dialog ref={dialogRef}>
        <form method="dialog">
          <input type="submit" className="close" value="&times;" />
        </form>
        <img
          loading="lazy"
          width={bigW}
          height={bigH}
          src={`${origin}/${bigW}/${bigH}${search}`}
          alt="This is a big cat."
        />
      </dialog>
    </figure>
  );
};

export default Card;
