import { Button, Modal } from "react-bootstrap";
import { FC, useState } from "react";
import { videoModalProps } from "./types";

const VideoModal: FC<videoModalProps> = ({
  show,
  handleShow,
  handleClose,
  url,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <iframe
          className="responsive-iframe"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Modal>
    </>
  );
};
export default VideoModal;
