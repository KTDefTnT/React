import Context from "./context";

export default function Provider({ children, store }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
