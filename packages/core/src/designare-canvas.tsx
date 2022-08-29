import React from 'react';
import { DesignareContextMenu } from './features/context-menu/designare-context-menu';
import { RecoilRoot } from "recoil";

export type DesignareCanvasProps = {
  children: React.ReactNode;
}

const DesignareCanvas = (props: DesignareCanvasProps) => {
  const { children } = props;
  const onShowContextMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();

  }
  return (
    <RecoilRoot>
      <div
        onContextMenu={onShowContextMenu}
        style={{
          height: "100%",
          width: "100%"
        }}
      >
        {children}
      </div>
      <DesignareContextMenu />
    </RecoilRoot>
  )
}

export default DesignareCanvas
