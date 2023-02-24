import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { modalProps } from "./types";
import styles from "./modal.module.scss";
import Link from "next/link";

export const Modaal: React.FC<modalProps> = ({
  children,
  modalTitle,
  isOpen,
  onClick,
  createAcc,
  description,
  desc,
  // isButton,
  setModalOpen,
  isAccount,
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={() => setModalOpen(false)}
      className={styles.customModal}
    >
      <ModalHeader>{modalTitle}</ModalHeader>
      <div className="desc">{desc}</div>
      <div className="description">{description}</div>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <div className="noAcc">
          {createAcc}
          <Link href="https://virtua.com/register">{isAccount}</Link>
        </div>
      </ModalFooter>
    </Modal>
  );
};
