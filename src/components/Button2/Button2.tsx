import { Button, Image } from "@mantine/core";
import { FC } from "react";

import { Button2Props as Props } from "./Button2.types";

const Button2: FC<Props> = props => {
  const { label, iconSrc } = props;

  return (
    <Button
      radius="md"
      bg="coolDecember"
      c="coarseWool"
      size="lg"
      fz={18}
      leftIcon={iconSrc && <Image src={iconSrc} alt={`${label} icon`} />}
      styles={theme => ({
        root: { "&:hover": { backgroundColor: theme.colors.warmApricot[6] } },
      })}
    >
      {label}
    </Button>
  );
};

export default Button2;
