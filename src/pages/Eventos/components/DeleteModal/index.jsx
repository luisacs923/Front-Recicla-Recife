import { Modal } from "antd";
import React from "react";
import Text from "../../../../components/Text";

export default function DeleteModal({evento, ...props}) {
  return (
    <Modal {...props}>
      <Text.Paragraph>Deseja deletar o evento {evento.nome_evento}?</Text.Paragraph>
    </Modal>
  )
}