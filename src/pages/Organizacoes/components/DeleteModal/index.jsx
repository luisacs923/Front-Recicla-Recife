import { Modal } from "antd";
import React from "react";
import Text from "../../../../components/Text";

export default function DeleteModal({organizacao, ...props}) {
  return (
    <Modal {...props}>
      <Text.Paragraph>Deseja deletar a Organização {organizacao.nome_organizacao}?</Text.Paragraph>
    </Modal>
  )
}