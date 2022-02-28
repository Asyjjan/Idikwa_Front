export function dateVersChaine(dte) {
  return dte.toISOString().substr(0, 10);
}

export function openURL(url) {
  const open = window.open;
  const win = open(url, "_blank");

  if (win) {
    win.focus();
    return win;
  }
}

export const variables = {
  authentifie: false,
  autorisation: "",
};
