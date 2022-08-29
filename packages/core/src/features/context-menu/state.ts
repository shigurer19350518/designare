import { useCallback } from "react";
import { atom, useSetRecoilState } from "recoil";

type ContextMenuState = {
  x: number;
  y: number;
  isShow: boolean;
}

const contextMenuState = atom<ContextMenuState>({
  key: "CONTEXT_MENU_STORE",
  default: {
    x: 0,
    y: 0,
    isShow: false
  }
})

export const ContextMenuActions = {
  setShowContextMenu: () => {
    const setter = useSetRecoilState(contextMenuState);

    return useCallback((param: Omit<ContextMenuState, 'isShow'>) => {
      setter({ ...param, isShow: true })
    }, [])
  }
} as const

export const ContextMenuSelectors = {
  
} as const
