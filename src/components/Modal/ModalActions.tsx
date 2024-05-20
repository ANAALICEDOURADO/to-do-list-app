import { Button } from "../Button";

type Props = {
    onClose: () => void
}

export const ModalActions = ({onClose, ...rest}: Props) => {
  return (
    <Button.Content
      marginTop={10}
      onPress={onClose}
    >
      <Button.Text text="Continuar" />
    </Button.Content>
  );
};
