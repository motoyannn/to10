import React, { ReactNode } from "react";

import styles from "@/styles/layout.module.scss";

type Props = {
  children: ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }: Props) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>header</h1>
      </header>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
