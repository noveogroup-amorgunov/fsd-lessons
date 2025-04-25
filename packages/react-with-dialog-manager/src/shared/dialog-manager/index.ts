// import { atom } from "@reatom/core";

// type Dialog = {
//   name: string
//   open: boolean
//   anchor?: string
// }

// export const dialogs = atom<Dialog[]>([], 'dialogs').actions(target => ({
//   open: (name: string) => target(state => [...state, { name, open: true }]),
//   close: (name: string) => target(state => state.filter(dialog => dialog.name !== name)),
// }))

// export function useDialog(component: React.ComponentType<any>) {
//   const { openedPanels, openPanel, closePanel } = usePanelStore();

//   const thisPanel = openedPanels.find((panel) => panel.name === name);

//   return {
//     isOpen: !!thisPanel,
//     anchor: thisPanel?.anchor,
//     open: (anchor?: string) => openPanel(name, anchor),
//     close: () => closePanel(name),
//     toggle: () => (thisPanel ? closePanel(name) : openPanel(name)),
//   };
// }
