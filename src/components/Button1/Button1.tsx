import { Button, Image } from "@mantine/core";
import { FC } from "react";

import { Button1Props as Props } from "./Button1.types";

const Button1: FC<Props> = props => {
  const { label, iconSrc } = props;

  return (
    <Button
      radius="md"
      bg="coarseWool"
      c="coolDecember"
      size="lg"
      fz={18}
      leftIcon={iconSrc && <Image src={iconSrc} alt={`${label} icon`} />}
      styles={theme => ({
        root: { "&:hover": { backgroundColor: theme.colors.pluviophile[6] } },
      })}
    >
      {label}
    </Button>
  );
};

export default Button1;
