import { Modal } from "antd";
import React from "react";
import Text from "../../../../components/Text";

export default function DeleteModal({estrategia, ...props}) {
  return (
    <Modal {...props}>
      <Text.Paragraph>Deseja deletar a Estratégia {estrategia.tipo_estrategia}?</Text.Paragraph>
    </Modal>
  )
}