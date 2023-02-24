import React from "react";

export interface modalProps {
  modalTitle: string;
  isOpen: boolean | undefined;
  children?: JSX.Element;
  onClick?: () => void;
  createAcc?: string;
  description?: any;
  desc?: string;
  isButton?: any;
  setModalOpen: (boolean: string | boolean) => void;
  isAccount: String;
}
