import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export function Modal({children}: PropsWithChildren) {

  return createPortal(<div style={{
      background:'white',
      padding: '10px',
      border: '1px solid black',
      position: 'absolute',
      top: '50%',
      left: '50%',
    }}>
      {children}
  </div>, document.body);
}