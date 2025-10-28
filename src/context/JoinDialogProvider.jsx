// src/context/JoinDialogProvider.jsx
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import JoinNowDialog from "../components/JoinNowDialog";

const JoinDialogCtx = createContext({ openDialog: () => {}, closeDialog: () => {} });

export function JoinDialogProvider({ children }) {
  const [open, setOpen] = useState(false);
  const openedOnce = useRef(false);

  // open once per page load/refresh
  useEffect(() => {
    if (!openedOnce.current) {
      openedOnce.current = true;
      setOpen(true);
    }
  }, []);

  const openDialog = useCallback(() => setOpen(true), []);
  const closeDialog = useCallback(() => setOpen(false), []);

  return (
    <JoinDialogCtx.Provider value={{ openDialog, closeDialog }}>
      {children}
      
      <JoinNowDialog open={open} onClose={closeDialog} />
    </JoinDialogCtx.Provider>
  );
}

export function useJoinDialog() {
  return useContext(JoinDialogCtx);
}
